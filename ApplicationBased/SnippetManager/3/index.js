const iohook = require('iohook');
const ioHook = require('iohook');

let cue = '!>';
let terminatingChar = '-';

let userInput = '';
ioHook.on('keypress', (msg) => {
  let msgCharacter = String.fromCharCode(msg.keychar);
  userInput += msgCharacter;

  console.log(`String: ${userInput}`);

  for (let i = 0; i < Math.min(cue.length, userInput.length); ++i) {
    if (cue[i] !== userInput[i]) {
      // Cue not found, clearing input
      userInput = '';
      console.log('Cue not found, clearing input');
      return;
    }
  }

  if (userInput.startsWith(cue)) {
    const userCommand = userInput.slice(cue.length, userInput.length);
    if (msgCharacter === terminatingChar) {
      userCommand = userCommand.slice(0, -1);
      console.log(`Command: ${userCommand}`)
    }
  }
});

iohook.start();
