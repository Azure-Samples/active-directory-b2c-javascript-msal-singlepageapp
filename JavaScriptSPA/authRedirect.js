// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

let accessToken;

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack(error, response) {
  if (error) {
    console.log(error);
  } else {
    if (response.tokenType === "id_token") {
      console.log("id_token acquired at: " + new Date().toString());
      myMSALObj.getAccount();
      getTokenRedirect(tokenRequest);
    } else if (response.tokenType === "access_token") {
        console.log("access_token acquired at: " + new Date().toString());
        accessToken = response.accessToken;
        logMessage("Request made to Web API:");
        if (accessToken) {
          try {
            callApiWithAccessToken(apiConfig.webApi, accessToken);
          } catch (err) {
            console.log(err);
          }
        }
    } else {
        console.log("Token type is: " + response.tokenType);
    }
  }
}

// Redirect: once login is successful and redirects with tokens, update UI
if (myMSALObj.getAccount()) {
  updateUI();
}

function signIn() {
  myMSALObj.loginRedirect(loginRequest);
}  

// sign-out the user
function logout() {
  // Removes all sessions, need to call AAD endpoint to do full logout
  myMSALObj.logout();
}

// main method to get token with redirect flow
function getTokenRedirect(request) {
return myMSALObj.acquireTokenSilent(request)
  .then((response) => {
    if (response.accessToken) {
      accessToken = response.accessToken;
      logMessage("Request made to Web API:");

      if (accessToken) {
        try {
          callApiWithAccessToken(apiConfig.webApi, accessToken);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }).catch(error => {
    console.log("Silent token acquisition fails. Acquiring token using redirect");
    console.log(error);
    // fallback to interaction when silent call fails
    return myMSALObj.acquireTokenRedirect(request);
  });
}


// calls the resource API with the token
function passTokenToApi() {
  if (!accessToken) {
    getTokenRedirect(tokenRequest);
  } else {
      logMessage("Request made to Web API:");
      try {
        callApiWithAccessToken(apiConfig.webApi, accessToken);
      } catch (err) {
        console.log(err);
      }
  }
}