var email = document.querySelector('#email');
var password = document.querySelector('#password');
var form = document.querySelector('form');

email.addEventListener('blur', validEmail);
password.addEventListener('blur', validPassword);
form.addEventListener('submit', submitForm);