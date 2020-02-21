// updates the UI post login/token acquisition
function updateUI() {
    const userName = myMSALObj.getAccount().name;
    logMessage("User '" + userName + "' logged-in");

    // add the logout button
    const authButton = document.getElementById('authButton');
    authButton.innerHTML = 'logout';
    authButton.setAttribute('onclick', 'logout();');
    authButton.setAttribute('class', "btn btn-success ml-auto")

    // greet the user - specifying login
    const label = document.getElementById('label');
    label.innerText = "Hello " + userName;

    // add the callWebApi button
    const callWebApiButton = document.getElementById('callApiButton');
    callWebApiButton.style.display = 'initial';
    callWebApiButton.setAttribute('class', 'btn btn-primary');
}

// debug helper
function logMessage(s) {
    document.getElementById("response")
        .appendChild(document.createTextNode('\n\n' + s));
}
