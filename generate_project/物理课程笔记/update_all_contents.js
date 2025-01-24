const fs = require('fs');
const path = require('path');

// 获取模板内容
const templatePath = path.join(__dirname, 'notes', 'contents_template.html');
let templateContent;
try {
  templateContent = fs.readFileSync(templatePath, { encoding: 'utf8', mode: 0o644 });
} catch (error) {
  console.error(`无法读取模板文件: ${templatePath}`);
  console.error(error);
  process.exit(1);
}

// 递归遍历目录
function updateContents(dir) {
  let items;
  try {
    items = fs.readdirSync(dir);
  } catch (error) {
    console.error(`无法读取目录: ${dir}`);
    console.error(error);
    return;
  }
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (error) {
      console.error(`无法获取文件状态: ${fullPath}`);
      console.error(error);
      return;
    }
    
    if (stat.isDirectory()) {
      // 如果是目录则递归
      updateContents(fullPath);
    } else if (item === 'contents.html') {
      // 如果是contents.html则更新
      console.log(`Updating: ${fullPath}`);
      try {
        fs.writeFileSync(fullPath, templateContent, { mode: 0o644 });
      } catch (error) {
        console.error(`无法更新文件: ${fullPath}`);
        console.error(error);
      }
    }
  });
}

// 从notes目录开始
const notesDir = path.join(__dirname, 'notes');
updateContents(notesDir);

console.log('All contents.html files have been updated.');
process.exit(0);
