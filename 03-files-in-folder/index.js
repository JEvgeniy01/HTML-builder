const fs = require('fs');
const path = require('path');
const secretPath = path.join(__dirname, 'secret-folder');
fs.readdir(secretPath, (err, files) => {
  for (let i = 0; i < files.length; i += 1) {
    let pathFile = path.join(secretPath, files[i]);
    fs.stat(pathFile, (err, stats) => {
      if (!stats.isDirectory()) {
        const fileExtension = path.extname(pathFile);
        const fileName = path.basename(pathFile, fileExtension);
        const fileSize = String(stats.size / 1000) + 'kB';
        const fileAbout =
          fileName + ' - ' + fileExtension.substring(1) + ' - ' + fileSize;
        console.log(fileAbout);
      }
    });
  }
});
