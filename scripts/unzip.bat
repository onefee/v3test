@REM @echo off
@REM "C:\Program Files\WinRAR\WinRAR.exe" x -y D:\wrok\pro\demo\vue\test\dist.rar
rd /s/q js
rd /s/q css
"C:\Program Files\WinRAR\WinRAR.exe" x -o+ "D:\wrok\pro\demo\vue\test\dist.rar" "D:\wrok\pro\demo\vue\test\scripts"
