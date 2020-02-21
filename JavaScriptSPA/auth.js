
"use strict";

// instantiate MSAL
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

// sign-in and acquire a token silently with popup flow. 
// Fall back in case of failure with silent acquisition to popup.
function signIn() {
    myMSALObj.loginPopup(loginRequest)
        .then(loginResponse => {
            getToken(tokenRequest)
                .then(updateUI);
    }).catch(error => {
        logMessage(error);
    });
}

//acquire a token silently
function getToken(tokenRequest) {
    return myMSALObj.acquireTokenSilent(tokenRequest)
        .catch(error => {
            console.log("Silent token acquisition fails. acquiring token using popup");
            
            // fallback to interaction when silent call fails
            return myMSALObj.acquireTokenPopup(tokenRequest)
                .then(tokenResponse => {
                }).catch(error => {
                    logMessage("Failed token acquisition", error);
                });
        });
}

// sign-out the user
function logout() {
    // Removes all sessions, need to call AAD endpoint to do full logout
    myMSALObj.logout();
}