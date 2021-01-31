const iohook = require('iohook');

let cue = '!>';
let terminatingChar = '-';

const wordDictionary = {
  'hello world': 'goodbye world',
  test: 'test working',
};

let userInput = '';
iohook.on('keypress', (msg) => {
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
    let userCommand = userInput.slice(cue.length, userInput.length);
    if (msgCharacter === terminatingChar) {
      userCommand = userCommand.slice(0, -1);
      console.log(`Command: ${userCommand}`);
      Object.entries(wordDictionary).forEach(([key, value]) => {
        if (userCommand === key) {
          console.log(`Replace: ${key} -> ${value}`);
        }
      });
    }
  }
});

iohook.start();
