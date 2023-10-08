@echo off
cd /d C:\Users\Administrator\Desktop\redis
start cmd /k "redis-server.exe" 
start cmd /k "redis-cli.exe" 
cd /d C:\Users\Administrator\WebstormProjects\koamysql
start cmd /k "npm run dev"