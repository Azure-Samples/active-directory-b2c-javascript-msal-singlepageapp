// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

function signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {
        console.log("id_token acquired at: " + new Date().toString());
        console.log(loginResponse);  
        
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
      console.log("Silent token acquisition fails. Acquiring token using popup");
      console.log(error);
      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenPopup(request)
        .then(tokenResponse => {
          console.log("access_token acquired at: " + new Date().toString());
          return tokenResponse;
        }).catch(error => {
          console.log(error);
        });
    });
}

// Acquires and access token and then passes it to the API call
function passTokenToApi() {
  getTokenPopup(tokenRequest)
    .then(tokenResponse => {
        console.log("access_token acquired at: " + new Date().toString());
        try {
          logMessage("Request made to Web API:");
          callApiWithAccessToken(apiConfig.webApi, tokenResponse.accessToken);
        } catch(err) {
          console.log(err);
        }
    });
}