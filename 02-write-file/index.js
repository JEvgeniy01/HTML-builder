const fs = require('fs');
const path = require('path');
const { stdout, exit } = process;
const readline = require('readline');

const outputPath = path.join(__dirname, '/text.txt');
const output = fs.createWriteStream(outputPath, { flags: 'a' });
const rl = readline.createInterface(process.stdin, process.stdout);

console.log('Welcome!');
rl.setPrompt('Write something to add to text.txt file\n');
rl.prompt();
rl.on('line', (data) => {
  rl.setPrompt('Write something to add to text.txt file\n');
  rl.prompt();
  if (data === 'exit') {
    rl.close();
  }
  output.write(`${data}\n`);
});
process.on('exit', () => {
  stdout.write('See you soon!');
});
