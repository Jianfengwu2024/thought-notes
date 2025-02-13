const fs = require('fs');
const path = require('path');

function copyImages(sourceDir, targetDir) {
    // 确保目标目录存在
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // 读取源目录中的所有文件
    fs.readdirSync(sourceDir).forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        // 如果是文件且是图片，则复制
        if (fs.statSync(sourcePath).isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
            fs.copyFileSync(sourcePath, targetPath);
        }
    });
}

// 获取笔记保存路径
const notePath = process.argv[2];
if (!notePath) {
    console.error('请提供笔记保存路径');
    process.exit(1);
}

// 获取分类和子分类
const [category, subcategory] = notePath.split(path.sep).slice(-3, -1);

// 源图片目录
const sourceImagesDir = path.join(__dirname, 'images');

// 目标图片目录
const targetImagesDir = path.join(__dirname, 'notes', category, subcategory, 'images');

// 复制图片
copyImages(sourceImagesDir, targetImagesDir);

console.log('图片复制完成');
