@echo off
cd /d %~dp0

REM Check if node is installed
where node >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if server.js exists
if not exist server.js (
    echo server.js not found in current directory.
    pause
    exit /b 1
)

REM Check if port 3000 is available
netstat -an | find ":3000" >nul
if not errorlevel 1 (
    echo Port 3000 is already in use. Please close the application using this port.
    pause
    exit /b 1
)

echo Starting server...
start node server.js
timeout /t 2 >nul

REM Try to open browser
start http://localhost:3000/index.html || (
    echo Failed to open browser. Please manually open http://localhost:3000/index.html
    pause
)

exit /b 0
