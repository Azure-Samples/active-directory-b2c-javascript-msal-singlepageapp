// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

function signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {  
        console.log('id_token acquired at: ' + new Date().toString());
        
        if (myMSALObj.getAccount()) {
          updateUI();
        }
        
    }).catch(function (error) {
      console.log(error);
    });
}

// sign-out the user
function logout() {
  // Removes all sessions, need to call AAD endpoint to do full logout
  myMSALObj.logout();
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log("silent token acquisition fails. acquiring token using popup");
      
      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenPopup(request)
        .then(tokenResponse => {
          console.log('access_token acquired at: ' + new Date().toString());
        })
        .catch(error => {
          console.log(error);
        });
    });
}