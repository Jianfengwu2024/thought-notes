# 物理课程笔记管理系统

## 项目概述
这是一个用于管理物理和数学课程笔记的Web应用系统，采用Node.js + Express + SQLite技术栈开发。

## 依赖安装
```bash
# 安装项目依赖
npm install

# 开发模式安装（包含nodemon）
npm install --include=dev
```

## 运行方法
```bash
# 开发模式运行
npm run dev

# 生产模式运行
npm start
```

# 傻瓜式启动
python打开check_env_and_start.py, 运行即可。
命令行：python [项目笔记文件夹]/check_env_and_start.py 
如已安装python IDE, 直接双击打开后运行。

## 文件结构
```
project_template/
├── notes/                  # 笔记内容目录
│   ├── 数学/               # 数学分类
│   │   ├── 代数/           # 代数子分类
│   │   └── 几何/           # 几何子分类
│   └── 物理/               # 物理分类
│       ├── 量子力学/       # 量子力学子分类
│       └── 理论力学/       # 理论力学子分类
├── index.html              # 前端主页面
├── style.css               # 全局样式
├── script.js               # 前端逻辑
├── server.js               # 后端服务
├── notes.db                # SQLite数据库
├── site_data.json          # 站点元数据
└── package.json            # 项目配置
```

## 系统架构图
```plantuml
@startuml
package "前端" {
    [index.html] --> [style.css]
    [index.html] --> [script.js]
    [script.js] --> [KaTeX]
}

package "后端" {
    [server.js] --> [Express]
    [Express] --> [SQLite]
    [Express] --> [Marked]
}

前端 --> 后端 : HTTP请求
@enduml
```

## 数据库ER图
```plantuml
@startuml
entity "笔记" {
    *id : integer <<PK>>
    --
    *title : text
    *content : text
    *category : text
    *subcategory : text
    created_at : datetime
    updated_at : datetime
}
@enduml
```

## 元数据说明
站点元数据存储在`site_data.json`中，包含：
- 站点标题
- 分类结构
  - 物理
    - 量子力学
    - 理论力学
  - 数学
    - 代数
    - 几何

## 站点数据结构
```json
{
  "title": "物理课程笔记",
  "categories": [
    {
      "name": "物理",
      "subcategories": [
        {"name": "量子力学"},
        {"name": "理论力学"}
      ]
    },
    {
      "name": "数学", 
      "subcategories": [
        {"name": "代数"},
        {"name": "几何"}
      ]
    }
  ]
}
```

# 流程图 

script.js的流程图
```plantuml
@startuml

start

:Page Load;
:Initialize Elements;
note right
  - Select markdownInput
  - Select htmlOutput
  - Initialize other elements
end note

:Attach Event Listeners;

if (File Upload?) then (yes)
  :Check if file is .md;
  if (Is .md file?) then (yes)
    :Enable upload button;
  else (no)
    :Disable upload button;
  endif
endif

:Render Markdown;
repeat
  :Input Event;
  :Process Text;
  note right
    - Apply highlighting
    - Render math
  end note
  :Update htmlOutput;
repeat while (More input?)

if (Save Note?) then (yes)
  :Check content size;
  if (Within limits?) then (yes)
    :Proceed to save;
  else (no)
    :Show error message;
  endif
endif

:Error Handling;
note right
  - Display error messages
  - Log errors
end note

stop

@enduml
```
## Server.js 流程图
```plantuml
@startuml

start

:Initialize Server;
:Load Modules;
note right
  - express
  - path
  - fs
  - sqlite3
  - compression
  - chokidar
  - WebSocket
end note

:Create Express App;
:Create WebSocket Server;
:Initialize Database;
note right
  - Connect to SQLite
  - Create notes table if not exists
end note

:Initialize File Watchers;
note right
  - Watch directories for changes
  - Handle file events
end note

:Setup Middleware;
note right
  - compression
  - express.json
  - static file serving
end note

:Define Routes;
note right
  - GET /
  - GET /notes/:category/:subcategory/contents.html
  - GET /api/notes
  - POST /api/save
  - POST /api/update
  - GET /api/search
end note

:Start HTTP Server;
note right
  - Listen on port 3000
  - Handle WebSocket upgrades
end note

stop

@enduml
```

## notes/subscript.js 流程图

```plantuml
@startuml

start

:Initialize Note List;
note right
  - Fetch notes from server
  - Render notes
end note

:Render Note List;
note right
  - Display loading state
  - Handle empty list
  - Render each note
  - Add sorting functionality
end note

:Initialize Event Handlers;
note right
  - Handle view, edit, delete actions
end note

:Initialize WebSocket Connection;
note right
  - Listen for file changes
  - Refresh note list on change
end note

:Delete Note;
note right
  - Confirm deletion
  - Send delete request to server
  - Refresh note list
  - Reload page
end note

:View Note;
note right
  - Fetch note content
  - Render content in HTML output
end note

stop

@enduml
```

# 结构图

## index.html 结构图

```plantuml
@startuml
left to right direction
package "index.html" {
    node "HTML Document" {
        [DOCTYPE html]
        [html lang="zh-CN"]
    }

    node "Head" {
        [meta charset="UTF-8"]
        [meta name="viewport"]
        [title id="dynamic-title"]
        [link rel="stylesheet" href="style.css"]
        [link rel="stylesheet" href="codemirror.css"]
        [script src="marked.min.js"]
        [link rel="stylesheet" href="katex.min.css"]
        [script src="codemirror.min.js"]
        [script src="markdown.min.js"]
        [script defer src="katex.min.js"]
        [script src="lz-string.min.js"]
        [script src="script.js" defer]
        [script src="advanced_script.js" defer]
    }

    node "Body" {
        node "Header" {
            [h1 id="main-title]
            node "Toolbar" {
                [button id="upload-note-btn"]
                node "Upload Dialog" {
                    [div id="upload-dialog" class="dialog"]
                    [input type="file" id="file-input"]
                    [button id="confirm-upload"]
                    [button id="cancel-upload"]
                }
                [button id="save-publish-btn"]
                node "Category Dialog" {
                    [div id="category-dialog" class="dialog"]
                    [select id="main-category"]
                    [select id="sub-category"]
                    [button id="confirm-save"]
                    [button id="cancel-save"]
                }
            }
        }
        node "Container" {
            [nav id="sidebar"]
            [div class="markdown-container"]
            [div id="markdown-input" class="markdown-input"]
            [div class="html-container"]
            [div id="html-output"]
        }
    }
}


@enduml
```
## notes/分类/子分类/contents.html 结构图

```plantuml
@startuml
left to right direction
package "contents_template.html" {
    node "HTML Document" {
        [DOCTYPE html]
        [html lang="zh-CN"]
    }

    node "Head" {
        [meta charset="UTF-8"]
        [meta name="viewport"]
        [title id="dynamic-title"]
        [link rel="stylesheet" href="../../../style.css"]
        [link rel="stylesheet" href="../../style1.css"]
        [script src="marked.min.js"]
        [link rel="stylesheet" href="katex.min.css"]
        [script defer src="katex.min.js"]
        [script src="../../../script.js" defer]
        [script src="../../subscript.js" defer]
        [script src= "fs polyfill and WebSocket"]
    }

    node "Body" {
        node "Header" {
            [h1 id="main-title"]
            node "Toolbar" {
                node "Category Dialog" {
                    [div id="category-dialog" class="dialog"]
                    [select id="main-category"]
                    [select id="sub-category"]
                    [button id="confirm-save"]
                    [button id="cancel-save"]
                }
            }
        }
        node "Container" {
            [nav id="sidebar"]
            node "Main Content" {
                node "Note List Container" {
                    [div class="note-list-header"]
                    [button class="home-btn"]
                    [select id="sort-by"]
                    [div id="note-list"]
                }
                [div id="html-output"]
            }
        }
    }
}

@enduml
```
