git pull > status.txt
$status = $(cat status.txt)
del status.txt
echo "$status"