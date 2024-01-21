const fs = require('fs');
const path = require('path');

const pathFiles = path.join(__dirname, 'files');
const pathCopy = path.join(__dirname, 'files-copy');

//implement with copyDir func
function copyDir(dest, src) {
  fs.mkdir(dest, { recursive: true }, (err) => {
    if (err) {
      console.log('error while making new directory');
    } else {
      //Читаем файлы из исходной директории
      fs.readdir(src, (err, files) => {
        if (err) {
          console.log('error while reading directory');
        } else {
          // Для каждого файла в исходной папке создаем копию в требуемой папке
          files.forEach((file) => {
            const pathToCopyFile = path.join(dest, file);
            const pathToSrcFile = path.join(src, file);
            fs.copyFile(pathToSrcFile, pathToCopyFile, (err) => {
              if (err) {
                console.log('error while copying file');
              }
            });
          });
        }
      });
    }
  });
}
copyDir(pathCopy, pathFiles);
