@echo off
chcp 65001 >nul
title Folio Press 繁體中文排版工作台
echo ========================================================
echo  正在啟動 Folio Press 繁體中文排版工作台（本地直連版）
echo  端點位址：http://localhost:8080
echo  本地 Ollama 直連：零 Mixed Content / 零 PNA 安全攔截
echo ========================================================
echo.

cd /d "%~dp0"
start "" "http://localhost:8080"
python -m http.server 8080
pause
