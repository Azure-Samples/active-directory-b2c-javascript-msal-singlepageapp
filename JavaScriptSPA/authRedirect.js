
"use strict";

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack(error, response) {
    if (error) {
        console.log(error);
    } else {
        if (response.tokenType === "id_token" && myMSALObj.getAccount() && !myMSALObj.isCallback(window.location.hash)) {
        console.log('id_token acquired at: ' + new Date().toString());
        updateUI();
        getTokenRedirect(tokenRequest);
        } else if (response.tokenType === "access_token") {
        console.log('access_token acquired at: ' + new Date().toString());
        } else {
        console.log("token type is:" + response.tokenType);
        }
    }
}

// Redirect: once login is successful and redirects with tokens, update UI
if (myMSALObj.getAccount() && !myMSALObj.isCallback(window.location.hash)) {
    // avoid duplicate code execution on page load in case of iframe and Popup window.
    updateUI();
}


function signIn() {
    myMSALObj.loginRedirect(loginRequest)
}  


// sign-out the user
function logout() {
    // Removes all sessions, need to call AAD endpoint to do full logout
    myMSALObj.logout();
}

// This function can be removed if you do not need to support IE
function getTokenRedirect(request) {
return myMSALObj.acquireTokenSilent(request)
    .then((response) => {
        if (response.accessToken) {
            accessToken = response.accessToken
        }
    }).catch(error => {
        console.log("silent token acquisition fails. acquiring token using redirect");
        // fallback to interaction when silent call fails
        return myMSALObj.acquireTokenRedirect(request)
    });
}