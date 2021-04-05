var validations = document.createElement('ul');

function runValidations() {
    formExists();
    numberOfFields(4);
    requiredFields();
    labels();
    linkToOtherPage('Login','login.html');
    checkButton('reset', 'Reset');
    checkButton('submit', 'Sign up');
    passedEveryValidation();

    document.getElementById('run-validations').classList.add('hidden');

    var results = document.getElementById('validation-results');

    results.appendChild(validations);
    results.classList.remove('hidden');
}