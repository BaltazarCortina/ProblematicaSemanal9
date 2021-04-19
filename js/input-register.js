var fullName = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var repeatPassword = document.querySelector('#repeat-password');
var form = document.querySelector('form');

fullName.addEventListener('blur', validName);
email.addEventListener('blur', validEmail);
password.addEventListener('blur', validPassword);
password.addEventListener('blur', validPasswordChange);
repeatPassword.addEventListener('blur', validRepeatPassword);
form.addEventListener('submit', handleRegister);