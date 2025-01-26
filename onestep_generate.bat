@echo off
echo Starting Node.js server...
start node generate_project/server.js
timeout /t 2 >nul
echo Opening browser...
start http://localhost:3001/config.html
exit
