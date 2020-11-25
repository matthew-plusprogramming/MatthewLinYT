console.log('Hello World!');

let myname = 'Matthew';
let age = 16;

if (age > 18) {
  console.log('You are an adult');
} else if (age > 12) {
  console.log('You are a teenager');
} else {
  console.log('You are a child');
}

let money = 6;
if (money > 5) {
  console.log('You have enough money!');
}

let bill = 5;

switch (bill) {
  case 1:
    console.log('$1');
    break;
  case 5:
    console.log('$5');
    break;
  case 20:
    console.log('$20');
    break;
  case 50:
    console.log('$50');
    break;
  case 100:
    console.log('$100');
    break;
  default:
    console.log('Bill not recognized');
    break;
}
