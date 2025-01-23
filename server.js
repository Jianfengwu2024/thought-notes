const express = require('express');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const chokidar = require('chokidar');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// 创建WebSocket服务器
const wss = new WebSocket.Server({ noServer: true });

// 文件系统监听器 - 开始
const watchers = new Map();

// 初始化所有子分类目录的监听器
function initWatchers() {
  const categoriesDir = path.join(__dirname, 'notes');
  
  // 获取所有一级分类目录
  const categories = fs.readdirSync(categoriesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // 为每个分类创建监听器
  categories.forEach(category => {
    const categoryPath = path.join(categoriesDir, category);
    
    // 获取所有子分类目录
    const subcategories = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    subcategories.forEach(subcategory => {
      const subcategoryPath = path.join(categoryPath, subcategory);
      const watcher = chokidar.watch(subcategoryPath, {
        persistent: true,
        ignoreInitial: true,
        depth: 1  // 只监控当前子分类目录
      });

      // 监听文件变化
      watcher.on('all', (event, filePath) => {
        console.log(`检测到文件变化: ${event} ${filePath}`);
        if (event === 'unlink') {
          console.log(`检测到分类变化: ${category}/${subcategory}`);
          
          const fileName = path.basename(filePath);
          
          // 如果是文件删除事件
          db.run(`DELETE FROM notes WHERE title = ?`, [fileName], (err) => {
            if (err) {
              console.error(`删除数据库记录失败: ${err.message}`);
            } else {
              console.log(`成功删除数据库记录: ${fileName}`);
            }
          });

          // 广播给所有连接的客户端
          wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                type: 'fileChange',
                category,
                subcategory
              }));
              console.log(`已发送WebSocket通知到客户端: ${client._socket.remoteAddress}`);
            }
          });
        }
      });

      // 保存watcher实例
      watchers.set(`${category}/${subcategory}`, watcher);
    });
  });
}

// 初始化所有监听器
initWatchers();
// 文件系统监听器 - 结束

// 更新笔记列表（不再直接修改contents.html）
function updateContentsHtml(category, subcategory) {
    // 通过WebSocket通知客户端更新笔记列表
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'noteListUpdate',
                category,
                subcategory
            }));
            console.log(`已发送笔记列表更新通知到客户端: ${client._socket.remoteAddress}`);
        }
    });
}

// 初始化数据库
const db = new sqlite3.Database(path.join(__dirname, 'notes.db'), (err) => {
    if (err) {
        console.error('数据库连接失败:', err.message);
    } else {
        console.log('成功连接到SQLite数据库');
        // 创建notes表
        // 创建新表（如果不存在），允许markdown_content为空
        db.run(`CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT NOT NULL,
            subcategory TEXT NOT NULL,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            markdown_content TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            modified_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    }
});

// 中间件
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use('/notes', express.static(path.join(__dirname, 'notes'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}));

// 首页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 子分类页面路由
app.get('/notes/:category/:subcategory/contents.html', (req, res) => {
    const { category, subcategory } = req.params;
    const filePath = path.join(__dirname, 'notes', category, subcategory, 'contents.html');
    res.sendFile(filePath);
});

// 获取笔记列表接口
app.get('/api/notes', (req, res) => {
    const { category, subcategory } = req.query;

    // 如果没有指定分类，返回所有笔记
    if (!category || !subcategory) {
        const sql = `SELECT id, title, category, subcategory,
                    strftime('%Y-%m-%d %H:%M', modified_at) as modifiedTime
                    FROM notes
                    ORDER BY modified_at DESC`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: '获取笔记列表失败：' + err.message
                });
            }

            // 格式化返回数据
            const notes = rows.map(row => ({
                id: row.id,
                title: row.title.replace(/_(\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2})\.html$/, ''),
                filename: row.title,
                modifiedTime: row.modifiedTime,
                category: row.category,
                subcategory: row.subcategory
            }));

            res.json({
                success: true,
                data: notes
            });
        });
    } else {
        // 首先清理无效记录
        const notesDir = path.join(__dirname, 'notes', category, subcategory);
        const files = fs.existsSync(notesDir) ? 
            fs.readdirSync(notesDir)
                .filter(file => file.endsWith('.html') && file !== 'contents.html')
                .map(file => path.basename(file)) : [];
        
        // 删除数据库中不存在的文件记录
        const cleanupSql = `DELETE FROM notes 
                           WHERE category = ? AND subcategory = ? 
                           AND title NOT IN (${files.map(() => '?').join(',')})`;
        db.run(cleanupSql, [category, subcategory, ...files], (cleanupErr) => {
            if (cleanupErr) {
                console.error('清理无效记录失败:', cleanupErr.message);
            }
            
            // 获取有效笔记列表
            const sql = `SELECT id, title, 
                        strftime('%Y-%m-%d %H:%M', modified_at) as modifiedTime
                        FROM notes
                        WHERE category = ? AND subcategory = ?
                        ORDER BY modified_at DESC`;
            
            db.all(sql, [category, subcategory], (err, rows) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: '获取笔记列表失败：' + err.message
                    });
                }
                
                // 格式化返回数据
                const notes = rows.map(row => ({
                    id: row.id,
                    title: row.title.replace(/_(\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2})\.html$/, ''),
                    filename: row.title,
                    modifiedTime: row.modifiedTime,
                    category: category,
                    subcategory: subcategory
                }));
                
                res.json({
                    success: true,
                    data: notes
                });
            });
        });
    }
});

// 保存笔记接口
app.post('/api/save', (req, res) => {
    const { category, subcategory, title, content, markdownContent, savePath } = req.body;
    
    // 创建分类目录
    const saveDir = path.join(__dirname, 'notes', savePath);
    if (!fs.existsSync(saveDir)) {
        fs.mkdirSync(saveDir, { recursive: true });
    }
    
    // 从markdown内容中提取标题
    const getTitleFromMarkdown = (content) => {
        if (!content) return title;
        
        const h1Match = content.match(/^#\s+(.+)$/m);
        if (h1Match) return h1Match[1].trim();
        
        const h2Match = content.match(/^##\s+(.+)$/m);
        if (h2Match) return h2Match[1].trim();
        
        return title; // 如果没有标题则使用默认title
    };

    // 生成带时间戳的文件名
    const cleanTitle = getTitleFromMarkdown(markdownContent || '')
        .replace(/[<>:"/\\|?*]/g, '') // 去除非法字符
        .replace(/\s+/g, '_'); // 空格替换为下划线
    const timestamp = new Date().toISOString().slice(0, 16).replace(/:/g, '-');
    
    // 保存HTML文件
    const htmlFilePath = path.join(saveDir, `${cleanTitle}_${timestamp}.html`);
    fs.writeFileSync(htmlFilePath, content);
    
    // 保存Markdown文件
    const mdFilePath = path.join(saveDir, `${cleanTitle}_${timestamp}.md`);
    fs.writeFileSync(mdFilePath, markdownContent || '');

    // 保存到数据库
    const sql = `INSERT INTO notes (category, subcategory, title, content, markdown_content) 
                 VALUES (?, ?, ?, ?, ?)`;
    const params = [category, subcategory, `${cleanTitle}_${timestamp}.html`, content, markdownContent];

    db.run(sql, params, function(err) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '笔记保存失败：' + err.message
            });
        }
        
        // 不触发文件添加事件，避免重复插入
        // 直接更新contents.html
        updateContentsHtml(category, subcategory);
        
        res.json({
            success: true,
            message: '笔记保存成功',
            id: this.lastID
        });
    });
});

// 更新笔记接口
app.post('/api/update', (req, res) => {
    const { category, subcategory, title, content, markdownContent, savePath } = req.body;
    
    // 获取原始文件名
    db.get(`SELECT title FROM notes WHERE id = ?`, [req.body.id], (err, row) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '获取笔记信息失败：' + err.message
            });
        }

        if (!row) {
            return res.status(404).json({
                success: false,
                message: '未找到要更新的笔记'
            });
        }

        const oldFilename = row.title;
        const saveDir = path.join(__dirname, 'notes', savePath);

        // 从markdown内容中提取新标题
        const getTitleFromMarkdown = (content) => {
            if (!content) return title;
            
            const h1Match = content.match(/^#\s+(.+)$/m);
            if (h1Match) return h1Match[1].trim();
            
            const h2Match = content.match(/^##\s+(.+)$/m);
            if (h2Match) return h2Match[1].trim();
            
            return title;
        };

        // 生成新文件名
        const cleanTitle = getTitleFromMarkdown(markdownContent || '')
            .replace(/[<>:"/\\|?*]/g, '')
            .replace(/\s+/g, '_');
        const timestamp = new Date().toISOString().slice(0, 16).replace(/:/g, '-');
        const newFilename = `${cleanTitle}_${timestamp}.html`;

        // 更新HTML文件
        const newHtmlPath = path.join(saveDir, newFilename);
        fs.writeFileSync(newHtmlPath, content);

        // 更新Markdown文件
        const newMdPath = path.join(saveDir, `${cleanTitle}_${timestamp}.md`);
        fs.writeFileSync(newMdPath, markdownContent || '');

        // 删除旧文件
        const oldHtmlPath = path.join(saveDir, oldFilename);
        const oldMdPath = path.join(saveDir, oldFilename.replace('.html', '.md'));
        if (fs.existsSync(oldHtmlPath)) fs.unlinkSync(oldHtmlPath);
        if (fs.existsSync(oldMdPath)) fs.unlinkSync(oldMdPath);

        // 更新数据库记录
        const sql = `UPDATE notes SET 
                    category = ?,
                    subcategory = ?,
                    title = ?,
                    content = ?,
                    markdown_content = ?,
                    modified_at = CURRENT_TIMESTAMP
                    WHERE id = ?`;
        const params = [category, subcategory, newFilename, content, markdownContent, req.body.id];

        db.run(sql, params, function(err) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: '笔记更新失败：' + err.message
                });
            }

            if (this.changes > 0) {
                // 触发文件更新事件
                const watcher = watchers.get(`${category}/${subcategory}`);
                if (watcher) {
                    watcher.emit('unlink', oldHtmlPath);
                    watcher.emit('add', newHtmlPath);
                }

                res.json({
                    success: true,
                    message: '笔记更新成功',
                    id: req.body.id
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: '未找到要更新的笔记'
                });
            }
        });
    });
});

// 删除笔记接口
app.post('/api/delete', (req, res) => {
    const { filename } = req.body;

    // 获取笔记信息
    db.get(`SELECT * FROM notes WHERE title = ?`, [filename], (err, row) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '获取笔记信息失败：' + err.message
            });
        }

        if (!row) {
            return res.status(404).json({
                success: false,
                message: '未找到该笔记'
            });
        }

        // 删除HTML文件
        const htmlFilePath = path.join(__dirname, 'notes', row.category, row.subcategory, filename);
        if (fs.existsSync(htmlFilePath)) {
            fs.unlinkSync(htmlFilePath);
        }

        // 删除Markdown文件
        const mdFilePath = path.join(__dirname, 'notes', row.category, row.subcategory, 
            filename.replace('.html', '.md'));
        if (fs.existsSync(mdFilePath)) {
            fs.unlinkSync(mdFilePath);
        }

        // 删除数据库记录
        db.run(`DELETE FROM notes WHERE title = ?`, [filename], function(err) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: '删除数据库记录失败：' + err.message
                });
            }

            // 触发文件删除事件，让文件系统监听器处理contents.html更新
            const watcher = watchers.get(`${row.category}/${row.subcategory}`);
            if (watcher) {
                watcher.emit('unlink', htmlFilePath);
            }

            if (this.changes > 0) {
                res.status(200).json({
                    success: true,
                    message: '笔记删除成功'
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: '未找到要删除的笔记'
                });
            }
        });
    });
});

// 搜索笔记接口
app.get('/api/search', (req, res) => {
    const { query } = req.query;
    const sql = `SELECT * FROM notes 
                 WHERE title LIKE ? OR content LIKE ? OR markdown_content LIKE ?
                 ORDER BY created_at DESC`;
    const searchTerm = `%${query}%`;

    db.all(sql, [searchTerm, searchTerm, searchTerm], (err, rows) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '搜索失败：' + err.message
            });
        }
        res.json({
            success: true,
            data: rows
        });
    });
});

// 启动HTTP服务器
const server = app.listen(port, () => {
    console.log(`服务器正在运行：http://localhost:${port}`);
    console.log('按 Ctrl+C 停止服务器');
});

// 处理WebSocket升级请求
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

// WebSocket连接处理
wss.on('connection', (ws) => {
    console.log('新的WebSocket连接');
    
    ws.on('close', () => {
        console.log('WebSocket连接关闭');
    });
});
