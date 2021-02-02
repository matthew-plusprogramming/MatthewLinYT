const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileResult = fs.readFileSync('text.txt');
console.log('File contains: ' + fileResult.toString());

rl.question('New contents:', (newContents) => {
  fs.writeFileSync('text.txt', newContents);
  rl.close();
});
