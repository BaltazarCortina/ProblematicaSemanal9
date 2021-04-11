var email = document.querySelector('#email');
var password = document.querySelector('#password');

email.addEventListener('blur', validEmail);
password.addEventListener('blur', validPassword);
