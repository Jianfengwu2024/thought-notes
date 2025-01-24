# 笔记项目生成器使用指南

本指南将帮助您使用generate_project工具快速生成适合您的笔记项目。

## 使用步骤

1. 安装node.js

2. 安装 npm 以及 ws, 注意，安装npm 就是npm install 不带任何参数。
   安装好了之后，才能用npm install ws 来安装ws模块。
  ```bash
   npm install
   npm install ws
   ```

3. **启动生成器**
   - 在当前目录运行以下命令：
     ```bash
     node generate_project/server.js
     ```

4. **配置项目**
   - 打开浏览器，访问：
     ```
     http://localhost:3000/config.html
     ```
   - 填写以下信息：
     - 项目标题
     - 主分类
     - 子分类

5. **生成项目**
   - 点击"生成"按钮，系统将自动创建您的笔记项目



## 注意事项
- 确保已安装Node.js环境
- 生成的项目文件将保存在`generate_project`目录下
- 您可以根据需要修改生成的笔记模板和样式
