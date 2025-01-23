const fs = require('fs');
const path = require('path');

// 读取模板文件内容
const templatePath = path.join(__dirname, 'notes', 'contents_template.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// 递归遍历目录
function updateContentsFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            updateContentsFiles(filePath);
        } else if (file === 'contents.html') {
            // 备份原文件
            const backupPath = filePath + '.bak';
            fs.copyFileSync(filePath, backupPath);
            
            // 读取文件内容
            let content = fs.readFileSync(filePath, 'utf8');
            
            // 获取当前分类信息
            const category = path.basename(path.dirname(filePath));
            const subcategory = path.basename(path.dirname(path.dirname(filePath)));
            
            // 只保留title和h1
            const oldTitle = content.match(/<title>.*<\/title>/)?.[0] || '';
            const oldH1 = content.match(/<h1>.*<\/h1>/)?.[0] || '';
            
            // 完全使用模板内容
            let newContent = templateContent
                .replace(/<title>.*<\/title>/, oldTitle)
                .replace(/<h1>.*<\/h1>/, oldH1);
            
            // 写入修改后的内容
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated: ${filePath}`);
        }
    });
}

// 从notes目录开始遍历
const notesDir = path.join(__dirname, 'notes');
updateContentsFiles(notesDir);

console.log('All contents.html files updated successfully!');
