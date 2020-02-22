// updates the UI post login/token acquisition
function updateUI() {
    const userName = myMSALObj.getAccount().name;
    logMessage("User '" + userName + "' logged-in");

    // add the logout button
    const signInButton = document.getElementById('SignIn');
    signInButton.nextElementSibling.style.display = 'none';
    signInButton.innerHTML = 'logout';
    signInButton.setAttribute('onclick', 'logout();');
    signInButton.setAttribute('class', "btn btn-success ml-auto")

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
        .appendChild(document.createTextNode('\n' + s));
}
