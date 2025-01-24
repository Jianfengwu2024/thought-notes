const fs = require('fs');
const path = require('path');

// 获取模板内容
const templatePath = path.join(__dirname, 'notes', 'contents_template.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// 递归遍历目录
function updateContents(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // 如果是目录则递归
            updateContents(fullPath);
        } else if (item === 'contents.html') {
            // 如果是contents.html则更新
            console.log(`Updating: ${fullPath}`);
            fs.writeFileSync(fullPath, templateContent);
        }
    });
}

// 从notes目录开始
const notesDir = path.join(__dirname, 'notes');
updateContents(notesDir);

console.log('All contents.html files have been updated.');
