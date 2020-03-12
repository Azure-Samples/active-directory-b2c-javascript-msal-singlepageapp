
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const msalConfig = {
  auth: {
    clientId: "e760cab2-b9a1-4c0d-86fb-ff7084abd902",
    authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
    validateAuthority: false
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add here scopes for id token to be used at the MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile"],
};

// Add here scopes for access token to be used at the API endpoints.
const tokenRequest = {
  scopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};