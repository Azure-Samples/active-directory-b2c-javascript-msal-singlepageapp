// helper function to access the resource with the token
function callApiWithAccessToken(endpoint, accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
      };
  
    console.log('request made to Graph API at: ' + new Date().toString());
    
    fetch(endpoint, options)
      .then(response => response.json())
      .then(response => {
        logMessage("Web APi returned:\n" + JSON.stringify(response));
      }).catch(error => {
        logMessage("Error calling the Web api:\n" + error);
      });
}

// calls the resource API with the token
function callApi() {
  getToken(tokenRequest)
      .then(tokenResponse => {
          try {
            callApiWithAccessToken(apiConfig.webApi, tokenResponse.accessToken);
          } catch(err) {
            console.log(err);
          }
      });
}