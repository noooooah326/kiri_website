@echo off
setlocal

cd /d "%~dp0"

echo.
echo Starting kiri local site...
echo Project: %CD%
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Please install Node.js first:
  echo https://nodejs.org/
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo.
echo Local URL:
echo http://127.0.0.1:5173/
echo.
echo Keep this window open while using the site.
echo Press Ctrl+C in this window to stop the local server.
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul && start "" "http://127.0.0.1:5173/""
call npm run dev -- --host 127.0.0.1 --port 5173

pause
