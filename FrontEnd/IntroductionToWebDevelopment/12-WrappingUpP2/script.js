let email = '';
let username = '';
let password = '';

function emailChanged() {
  email = document.getElementById('email-input').value;
}
function usernameChanged() {
  username = document.getElementById('username-input').value;
}
function passwordChanged() {
  password = document.getElementById('password-input').value;
}

function onSubmit() {
  document.getElementById('result-email').innerText = 'Email is ' + email;
  document.getElementById('result-username').innerText = 'Username is ' + username;
  document.getElementById('result-password').innerText = 'Passowrd is ' + password;
}
