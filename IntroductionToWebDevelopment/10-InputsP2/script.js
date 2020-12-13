

// console.log(document.getElementById('text-input'));
// console.log(document.getElementsByClassName('inputs'));

let textInput;

function textInputChanged(e) {
  textInput = document.getElementById('text-input').value;
  // document.getElementById('result').innerText = 'Hello'
}
function dateChanged(e) {
  console.log('CHANGE DATE!');
}
function submitButtonClicked(e) {
  document.getElementById('result').innerText = textInput;
}

