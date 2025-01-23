# 科学笔记管理系统

## 项目概述
这是一个基于Markdown的科学笔记管理系统，支持笔记的分类管理、实时预览、公式渲染、笔记保存与发布等功能。

## 系统架构
```
我的思想笔记/
├── index.html          # 主页面
├── script.js           # 主页面逻辑
├── server.js           # 后端服务
├── style.css           # 主页面样式
├── notes/              # 笔记存储目录
│   ├── subscript.js    # 子页面逻辑
│   ├── style1.css      # 子页面样式
│   ├── contents_template.html # 笔记列表模板
│   ├── 分类目录/        # 按分类存储笔记
│   │   ├── contents.html # 笔记列表
│   │   ├── 笔记文件.md   # Markdown笔记
│   │   └── 笔记文件.html # 渲染后的HTML
├── notes.db            # SQLite数据库
└── backup/             # 自动备份目录
```

## 依赖关系
```
前端:
- marked.js          # Markdown解析
- katex.js           # 数学公式渲染
- highlight.js       # 代码高亮

后端:
- express            # Web服务器
- sqlite3            # 数据库操作
- body-parser        # 请求体解析
```

## 环境要求
- Node.js (v16+)
- npm (v8+)
- SQLite3

## 安装步骤

1. 安装Node.js和npm
   - Windows: 从 https://nodejs.org/ 下载安装包
   - macOS: `brew install node`

2. 克隆项目
   ```bash
   git clone https://github.com/your-repo/科学笔记管理系统.git
   cd 科学笔记管理系统
   ```

3. 安装依赖
   ```bash
   npm install
   ```

4. 初始化数据库
   ```bash
   node check_tables.js
   ```

5. 启动开发服务器
   ```bash
   node server.js
   ```

6. 访问应用
   打开浏览器访问 http://localhost:3000

## 主要功能

### 前端功能
- 实时Markdown预览
- 数学公式支持（LaTeX语法）
- 代码高亮
- 笔记分类管理
- 自动保存
- 笔记发布与更新

### 后端功能
- 笔记存储管理
- 分类目录维护
- 数据库操作
- 文件系统管理
- 自动备份

## 开发指南

1. 前端开发
   - 修改 `script.js` 和 `style.css`
   - 实时预览：`npm run dev`

2. 后端开发
   - 修改 `server.js`
   - 数据库操作：`node query_db.js`
   - 测试API：`curl http://localhost:3000/api/notes`

3. 部署
   ```bash
   npm run build
   npm start
   ```

## 维护脚本

- `update_all_contents.js` - 更新所有分类的笔记列表
- `check_tables.js` - 检查并初始化数据库表
- `query_db.js` - 数据库查询工具
- `auto_backup.py` - 自动备份脚本

## 贡献指南
1. Fork项目
2. 创建特性分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -am '添加新功能'`)
4. 推送分支 (`git push origin feature/新功能`)
5. 创建Pull Request

## 许可证
MIT License
