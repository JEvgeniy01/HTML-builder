const { stdout } = process;
const fs = require('fs');
const path = require('path');
const pathToText = path.join(__dirname, '/text.txt');
const readableStream = fs.createReadStream(pathToText, 'utf-8');
readableStream.on('data', (data) => stdout.write(data));
