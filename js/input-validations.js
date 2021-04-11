function validate(e, errorMessage) {
    e.target.classList.add('error');

    var message = document.createElement('div');
    message.innerText = errorMessage;
    e.target.parentElement.appendChild(message);
    message.classList.add('error-message');

    e.target.addEventListener('focus', correcting);
}

function correcting (e) {
    e.target.classList.remove('error');
    e.target.parentElement.querySelector('.error-message').remove();
    e.target.removeEventListener('focus', correcting);
}

function validEmail(e) {
    var validFormat = /^([\w.\-+/!%]{1,64}|"[\w. ]{1,62}")@[1-9a-zA-Z\-]+(\.[a-zA-Z]+)*$/;          //Based on wikipedia's examples of valid and invalid email addresses
    var errorMessage = 'Enter a correct email address';
    if (!validFormat.test(e.target.value)) {
        validate(e, errorMessage);
    }
}

function validName(e) {
    var validFormat = /^([A-Za-z]+( [A-Za-z]+)+)$/;
    var errorMessage = 'Enter your full name';
    if (!validFormat.test(e.target.value) || e.target.value.length < 6) {
        validate(e, errorMessage);
    }
}

function validPassword(e) {
    var validFormat = /[0-9a-zA-Z]/;
    var errorMessage = 'The password must contain at least 8 characters, including a number and a letter';
    if (!validFormat.test(e.target.value) || e.target.value.length < 8) {
        validate(e, errorMessage);
    }
}

function validRepeatPassword(e) {
    var password = document.querySelector('#password').value;
    var errorMessage = 'The passwords don\'t match';
    if (e.target.value != password) {
        validate(e, errorMessage);
    }
}

function validForm() {

}