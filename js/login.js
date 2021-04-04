var validations = document.createElement('ul');

formExists();
numberOfFields(2);
requiredFields();
labels();
linkToOtherPage('Register','register.html');
checkButton('reset', 'Reset');
checkButton('submit', 'Submit');
passedEveryValidation();

var results = document.getElementById('validation-results');

results.appendChild(validations);

results.classList.remove('hidden');