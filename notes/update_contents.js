const fs = require('fs');
const path = require('path');

// 获取所有contents.html文件路径
const notesDir = path.join(process.cwd(), '我的思想笔记/notes');
const contentsFiles = [];

function findContentsFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findContentsFiles(filePath);
        } else if (file === 'contents.html') {
            contentsFiles.push(filePath);
        }
    });
}

findContentsFiles(notesDir);

// 更新每个contents.html文件
contentsFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 移除旧的实时更新逻辑
    content = content.replace(/<script>[\s\S]*?<\/script>/, `
    <script>
        window.fs = window.require('fs');
        window.path = window.require('path');
    </script>
    `);
    
    // 确保使用新的script.js
    content = content.replace(/<script src="..\/..\/script.js" defer><\/script>/, 
        '<script src="script.js" defer></script>');
    
    // 确保笔记列表结构存在
    if (!content.includes('note-list-container')) {
        const noteListHtml = `
            <div class="note-list-container">
                <div class="note-list-header">
                    <h2>笔记列表</h2>
                    <div class="sort-controls">
                        <label>排序方式：
                            <select id="sort-by">
                                <option value="date-desc">最新优先</option>
                                <option value="date-asc">最早优先</option>
                                <option value="title-asc">标题升序</option>
                                <option value="title-desc">标题降序</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div id="note-list">
                    <!-- 笔记条目将动态加载 -->
                </div>
            </div>`;
        
        content = content.replace(/<div class="main-content">([\s\S]*?)<\/div>/, 
            `<div class="main-content">${noteListHtml}</div>`);
    }
    
    fs.writeFileSync(filePath, content);
});

console.log(`Updated ${contentsFiles.length} contents.html files`);
