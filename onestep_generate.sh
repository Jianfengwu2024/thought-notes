#!/bin/bash

echo "Starting Node.js server..."
# 使用 & 符号在后台启动服务器
node generate_project/server.js &

# 等待2秒钟
sleep 2

echo "Opening browser..."
# 使用 xdg-open 在默认浏览器中打开URL（适用于大多数Linux发行版）
# 在macOS上使用 open 命令
if [[ "$OSTYPE" == "darwin"* ]]; then
  open http://localhost:3001/config.html
else
  xdg-open http://localhost:3001/config.html
fi

exit 0