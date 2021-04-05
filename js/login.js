var validations = document.createElement('ul');

function runValidations() {
    formExists();
    numberOfFields(2);
    requiredFields();
    labels();
    linkToOtherPage('Register','register.html');
    checkButton('reset', 'Reset');
    checkButton('submit', 'Sign in');
    passedEveryValidation();

    document.getElementById('run-validations').classList.add('hidden');

    var results = document.getElementById('validation-results');

    results.appendChild(validations);
    results.classList.remove('hidden');
}