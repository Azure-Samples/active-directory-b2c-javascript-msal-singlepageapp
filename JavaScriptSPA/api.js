// helper function to access the resource with the token
function callApiWithAccessToken(endpoint, token) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers: headers
    };

  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => {
      logMessage("Web API returned:\n" + JSON.stringify(response));
    }).catch(error => {
      logMessage("Error calling the Web api:\n" + error);
    });
}