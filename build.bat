del /s /q ".\build\*"
rmdir /s /q ".\build"
call npm run build
call serve -p 9000 build