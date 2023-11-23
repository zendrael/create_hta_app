:: hta application build script

:: check if dev folder exists
if exist dev\ (
  echo "dev folder found, continue..." 
) else (
  echo "no dev folder found, creating..."
  md dev
)



:: copy files
echo "Copy files"
copy app.html dev\app.hta

copy src\* dev\





echo "Done."