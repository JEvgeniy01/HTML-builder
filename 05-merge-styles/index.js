const fs = require('fs');
const path = require('path');
const { readdir } = require('node:fs/promises');
const { readFile } = require('node:fs/promises');
const { appendFile } = require('node:fs/promises');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');
const stylesPath = path.join(__dirname, 'styles');

readdir(stylesPath, { withFileTypes: true }).then((files) => {
  files.forEach((file) => {
    const pathToStyleFile = path.join(stylesPath, file.name);
    if (file.isFile() && path.extname(pathToStyleFile).endsWith('.css')) {
      readFile(pathToStyleFile, { encoding: 'utf-8' }).then((data) => {
        appendFile(bundlePath, data);
      });
    }
  });
});
