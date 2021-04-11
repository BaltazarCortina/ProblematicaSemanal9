var fullName = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var repeatPassword = document.querySelector('#repeat-password');

fullName.addEventListener('blur', validName);
email.addEventListener('blur', validEmail);
password.addEventListener('blur', validPassword);
repeatPassword.addEventListener('blur', validRepeatPassword);