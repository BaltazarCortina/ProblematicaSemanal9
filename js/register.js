var validations = document.createElement('ul');

formExists();
numberOfFields(4);
requiredFields();
labels();
linkToOtherPage('Login','login.html');
checkButton('reset', 'Reset');
checkButton('submit', 'Submit');
passedEveryValidation();

var results = document.getElementById('validation-results');

results.appendChild(validations);

results.classList.remove('hidden');