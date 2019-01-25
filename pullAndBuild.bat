git pull > status.txt
set /p %status%= < status.txt
del status.txt
echo %password%