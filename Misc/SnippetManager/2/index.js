const ioHook = require('iohook');

let userInput = '';
ioHook.on('keypress', (msg) => {
  let msgCharacter = String.fromCharCode(msg.keychar);
  console.log(msgCharacter);
});

ioHook.start();
