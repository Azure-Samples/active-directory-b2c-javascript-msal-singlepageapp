// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

let accessToken;

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack(error, response) {
  // Error handling
  if (error) {
    console.log(error);

    // Check for forgot password error
    // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
    if (error.errorMessage.indexOf("AADB2C90118") > -1) {
      try {
        // Password reset policy/authority
        myMSALObj.loginRedirect(b2cPolicies.authorities.forgotPassword);
      } catch(err) {
        console.log(err);
      }
    }
  } else {
    // We need to reject id tokens that were not issued with the default sign-in policy.
    // "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr")
    // To learn more about b2c tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
    if (response.tokenType === "id_token" && response.idToken.claims['acr'] === b2cPolicies.names.forgotPassword) {
      myMSALObj.logout();
      window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");

    } else if (response.tokenType === "id_token" && response.idToken.claims['acr'] === b2cPolicies.names.editProfile) {
      window.alert("Profile has been updated successfully.");

      if (myMSALObj.getAccount()) {
        updateUI();
      }

    } else if (response.tokenType === "id_token" && response.idToken.claims['acr'] === b2cPolicies.names.signUpSignIn) {
      console.log("id_token acquired at: " + new Date().toString());

      if (myMSALObj.getAccount()) {
        updateUI();
      }

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

function editProfile() {
  myMSALObj.loginRedirect(b2cPolicies.authorities.editProfile);
}
