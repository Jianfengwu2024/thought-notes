# 科学笔记项目

## 项目概述
这是一个用于管理和展示科学笔记的Web应用程序，主要包含数学、物理、哲学等学科的学习笔记。项目采用模块化设计，具有良好的可扩展性。

## 文件系统结构
```
.
├── index.html                # 主页面
├── server.js                 # 本地开发服务器
├── site_data.json            # 站点数据配置文件
├── style.css                 # 全局样式
├── script.js                 # 主脚本文件
├── update_all_contents.js    # 内容更新脚本
├── notes/                    # 笔记目录
│   ├── contents_template.html # 笔记内容模板
│   ├── style1.css            # 笔记内容样式
│   ├── subscript.js          # 笔记脚本
│   ├── 数学/                 # 数学分类
│   │   ├── 代数拓扑/         # 子分类
│   │   │   └── contents.html # 具体笔记
│   │   └── ...               # 其他数学子分类
│   ├── 物理/                 # 物理分类
│   ├── 哲学/                 # 哲学分类
│   └── 文化/                 # 文化分类
└── README.md                 # 项目说明文档
```

## site_data.json
- 存储站点配置信息
- 包含笔记分类结构
- 记录笔记元数据（创建时间、更新时间等）
- 用于动态生成导航菜单

## 依赖库
- Express.js：用于本地开发服务器
- KaTeX：用于数学公式渲染
- Highlight.js：用于代码高亮
- Font Awesome：用于图标显示

## 组件依赖关系
```
index.html
  ├── style.css
  ├── script.js
  │   ├── site_data.json
  │   └── notes/subscript.js
  └── notes/contents_template.html
      ├── notes/style1.css
      └── notes/subscript.js
```

## 主要功能
1. 笔记分类管理
   - 支持多级分类
   - 动态生成导航菜单
   - 快速切换不同分类

2. 笔记内容展示
   - 支持Markdown格式
   - 数学公式渲染
   - 代码高亮显示
   - 响应式布局

3. 本地开发环境
   - 实时预览
   - 自动刷新
   - 热重载支持

4. 内容更新
   - 批量更新脚本
   - 自动生成目录结构
   - 内容版本控制

## 使用说明
1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm start
   ```

3. 访问应用：
   ```
   http://localhost:3000
   ```

4. 更新内容：
   ```bash
   node update_all_contents.js
   ```

## 贡献指南
欢迎提交Pull Request，请遵循以下规范：
- 保持代码风格一致
- 添加必要的注释
- 更新相关文档
- 确保向后兼容性
