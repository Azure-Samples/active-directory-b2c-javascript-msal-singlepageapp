// UI elements to work with
const signInButton = document.getElementById('SignIn');
signInButton.addEventListener('click', signIn);

const callWebApiButton = document.getElementById('callApiButton');

const label = document.getElementById('label');
const response = document.getElementById("response");

// updates the UI post login/token acquisition
function updateUI() {
        const userName = myMSALObj.getAccount().name;
        logMessage("User '" + userName + "' logged-in");
    
        // add the logout button
        signInButton.innerHTML = 'logout';
        signInButton.setAttribute('class', "btn btn-success ml-auto")
        signInButton.removeEventListener('click', signIn);
        signInButton.addEventListener('click', logout);
    
        // greet the user - specifying login
        label.innerText = "Hello " + userName;
    
        // add the callWebApi button
        callWebApiButton.style.display = 'initial';
        callWebApiButton.setAttribute('class', 'btn btn-primary');
        callWebApiButton.addEventListener('click', callApi);
}

// debug helper
function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s));
}
