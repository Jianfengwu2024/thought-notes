const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const port = process.env.PORT || 3001;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'config.html'));
});
app.use(express.json());

function copyFiles(sourceDir, targetDir, files) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true, mode: 0o755 });
  }

  if (Array.isArray(files)) {
    // 复制指定文件列表
    files.forEach(file => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      // 添加调试输出
      console.log(`检查文件: ${sourcePath}`);
      
      if (fs.existsSync(sourcePath)) {
        console.log(`文件存在，开始复制: ${sourcePath} -> ${targetPath}`);
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`复制文件: ${sourcePath} -> ${targetPath}`);
      } else {
        console.warn(`源文件不存在: ${sourcePath}`);
      }
    });
  } 
}


// 处理生成项目请求
app.post('/generate', (req, res) => {
  const { title, categories } = req.body;
  
  // 验证输入
  if (!title || !categories || !Array.isArray(categories)) {
    return res.status(400).json({ 
      success: false,
      message: '无效的输入数据'
    });
  }

  // 验证分类数据结构
  if (!categories.every(cat => typeof cat === 'object' && 
                        cat !== null && 
                        typeof cat.name === 'string' &&
                        (!cat.subcategories || Array.isArray(cat.subcategories)))) {
    return res.status(400).json({
      success: false,
      message: '分类数据结构无效，每个分类必须包含name属性和可选的subcategories数组'
    });
  }

  // 创建项目文件夹
  const projectName = title;
  const projectPath = path.join(__dirname, projectName);
  
  try {
    // 创建项目目录
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true, mode: 0o755 });
    }

    // 复制主目录文件
    const mainFiles = [
      'server.js',
      'notes.db',
      'script.js',
      'style.css',
      'update_all_contents.js',
      'index.html',
      'readme.md',
      'package.json',
      'package-lock.json',
      'check_env_and_start.py'
    ];
    copyFiles(path.join(__dirname, '../project_template'), projectPath, mainFiles);

    // 创建 site_data.json
    const siteData = {
      title,
      categories
    };
    
    fs.writeFileSync(
      path.join(projectPath, 'site_data.json'),
      JSON.stringify(siteData, null, 2)
    );

    // 创建notes目录并复制文件
    const notesPath = path.join(projectPath, 'notes');
    const notesFiles = ['subscript.js', 'style1.css', 'contents_template.html'];
    copyFiles(path.join(__dirname, '../project_template/notes'), notesPath, notesFiles);

    // 创建分类/子分类文件夹结构
    categories.forEach(category => {
      const categoryPath = path.join(notesPath, category.name);
      fs.mkdirSync(categoryPath, { recursive: true, mode: 0o755 });
      console.log(`创建分类目录: ${categoryPath}`);

      if (category.subcategories && Array.isArray(category.subcategories)) {
        category.subcategories.forEach(subcategory => {
          let subcategoryName = '';
          if (typeof subcategory === 'string') {
            subcategoryName = subcategory.trim();
          } else if (typeof subcategory === 'object' && subcategory !== null && typeof subcategory.name === 'string') {
            subcategoryName = subcategory.name.trim();
          }

          if (subcategoryName !== '') {
            const subcategoryPath = path.join(categoryPath, subcategoryName);
            fs.mkdirSync(subcategoryPath, { recursive: true, mode: 0o755 });
            console.log(`创建子分类目录: ${subcategoryPath}`);
            // 在每个子分类下创建contents.html
            fs.writeFileSync(path.join(subcategoryPath, 'contents.html'), '');
          } else {
            console.warn(`忽略无效的子分类: ${JSON.stringify(subcategory)}`);
          }
        });
      } else {
        console.log(`分类 ${category.name} 没有子分类`);
      }
    });

    // 跨平台执行update_all_contents.js
    const scriptPath = path.join(projectPath, 'update_all_contents.js');
    const command = `node "${scriptPath}"`;
    
    exec(command, { cwd: projectPath, shell: true }, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行update_all_contents.js失败: ${error.message}`);
        return res.json({
          success: true,
          message: `项目已成功生成在 ${projectName} 目录，但update_all_contents.js执行失败：${error.message}`
        });
      }
      if (stderr) {
        console.error(`update_all_contents.js stderr: ${stderr}`);
      }
      console.log(`update_all_contents.js stdout: ${stdout}`);
      
      res.json({ 
        success: true,
        message: `项目已成功生成在 ${projectName} 目录，并成功执行了update_all_contents.js`
      });
    });
  } catch (error) {
    console.error('生成项目失败:', error);
    res.status(500).json({
      success: false,
      message: '生成项目失败：' + error.message
    });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
