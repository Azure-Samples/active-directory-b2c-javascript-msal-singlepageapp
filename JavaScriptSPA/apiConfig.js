// The current application coordinates were pre-registered in a B2C tenant.
var apiConfig = {
    b2cScopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"],
    webApi: "https://fabrikamb2chello.azurewebsites.net/hello"
  };

// request to sign-in (returns an idToken)
const loginRequest = {
    scopes: apiConfig.b2cScopes
};

// request to acquire a token for resource access
const tokenRequest = {
    scopes: apiConfig.b2cScopes
};