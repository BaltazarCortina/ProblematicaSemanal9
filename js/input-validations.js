var submitBtn = document.querySelector('input[type=submit]');

function errorFound(e, errorMessage) {
    e.target.classList.add('error');

    var message = document.createElement('div');
    message.innerText = errorMessage;
    e.target.parentElement.appendChild(message);
    message.classList.add('error-message');

    submitBtn.classList.add('disabled');

    e.target.addEventListener('focus', correcting);
}

function correcting (e) {
    e.target.classList.remove('error');
    e.target.parentElement.querySelector('.error-message').remove();
    e.target.removeEventListener('focus', correcting);
}

function validateForm() {
    if (document.querySelectorAll('.error').length === 0) {
        submitBtn.classList.remove('disabled');
    }
}

function validEmail(e) {
    var validFormat = /^([\w.\-+/!%]{1,64}|"[\w. ]{1,62}")@[0-9a-zA-Z\-]+(\.[a-zA-Z]+)*$/;          //Based on wikipedia's examples of valid and invalid email addresses
    var errorMessage = 'Enter a correct email address';
    if (!validFormat.test(e.target.value)) {
        errorFound(e, errorMessage);
    } else {
        validateForm();
    }
}

function validName(e) {
    var validFormat = /^([A-Za-z]+( [A-Za-z]+)+)$/;
    var errorMessage = 'Enter your full name';
    if (!validFormat.test(e.target.value) || e.target.value.length < 6) {
        errorFound(e, errorMessage);
    } else {
        validateForm();
    }
}

function validPassword(e) {
    var validFormat = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;                    //At least 8 digits (only letters and numbers). At least 1 number and 1 upper or lowercase letter
    var errorMessage = 'The password must contain at least 8 characters, including a number and a letter';
    if (!validFormat.test(e.target.value)) {
        errorFound(e, errorMessage);
    } else {
        validateForm();
    }
}

function validRepeatPassword(e) {
    var password = document.querySelector('#password').value;
    var errorMessage = 'The passwords don\'t match';
    if (e.target.value != password) {
        errorFound(e, errorMessage);
    } else {
        validateForm();
    }
}

function submitForm (e) {
    e.preventDefault();
    if (submitBtn.classList.contains('disabled')) {
        alert('One or more fields are not correct!')
    } else {
        var fields = document.querySelectorAll('.field');
        showDiv();
        validations.innerHTML = '<li class="underline input-data">Input data:</li>';
        for (let i = 0; i < fields.length; i++) {
            var text = fields[i].name.toUpperCase() + ': ' + fields[i].value;
            appendListElement(text, 'input-data');
        }
        //request a ...
    }
}