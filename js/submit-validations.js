function handleError(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function insertResultMessage(resultId, resultClass, text) {
    let message = document.querySelector('#' + resultId);
    if (message === null) {
        form.insertAdjacentHTML('afterbegin', '<div id="' + resultId + '" class="' + resultClass + '">' + text + '</div>');
    } else {
        message.innerHTML = text;
        message.className = resultClass;
    }
}

function getFormData () {
    var fields = document.querySelectorAll('.field');
    showDiv();
    validations.innerHTML = '<li class="underline input-data">Input data:</li>';
    let formData = new Object();
    for (let i = 0; i < fields.length; i++) {
        var text = fields[i].name.toUpperCase() + ': ' + fields[i].value;
        appendListElement(text, 'input-data');
        if (fields[i].name != 'repeat-password') {
            formData[fields[i].name] = fields[i].value;
        }
    }
    return formData;
}

function handleRegister(e) {
    e.preventDefault();
    if (submitBtn.classList.contains('disabled')) {
        alert('One or more fields are not correct!')
    } else {
        let formData = getFormData();
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => handleError(res))
        .then(res => res.json())
        .then(res => {
            console.log(res.result);
            registerSuccessfull();
        })
        .catch(error => {
            console.log(error + '\nUser already exists');
            registerFailed();
        })
    }
}

function handleLogin(e) {
    e.preventDefault();
    if (submitBtn.classList.contains('disabled')) {
        alert('One or more fields are not correct!')
    } else {
        let formData = getFormData();
        fetch('http://localhost:4000/login', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => handleError(res))
        .then(res => res.json())
        .then(res => {
            console.log(res.result);
            loginSuccessfull(res.name);
        })
        .catch(error => {
            console.log(error + '\nUser does not exist');
            loginFailed(error.message);
        })
    }
}

function loginSuccessfull(name) {
    let mainSection = document.querySelector('#main-section');
    let firstName = name.split(' ')[0];
    let message = document.createElement('div');
    let messageText = document.createTextNode('Welcome ' + firstName);
    message.appendChild(messageText);
    message.classList.add('login-successfull');
    mainSection.appendChild(message);
    form.classList.add('hidden');
}

function registerSuccessfull() {
    insertResultMessage('register-result', 'register-successfull', 'Successfully created user!');
}

function loginFailed(error) {
    if (error === '401') {
        insertResultMessage('login-result', 'login-failed', 'The password is incorrect!');
    } else if (error === '404') {
        insertResultMessage('login-result', 'login-failed', 'The user does not exist!');
    } else {
        insertResultMessage('login-result', 'login-failed', 'Something went wrong!');
    }
}

function registerFailed() {
    insertResultMessage('register-result', 'register-failed', 'The user already exists!');
}