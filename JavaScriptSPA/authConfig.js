const msalConfig = {
    auth: {
        clientId: "e760cab2-b9a1-4c0d-86fb-ff7084abd902",
        authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
        validateAuthority: false
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

// request to sign-in (returns an idToken)
const loginRequest = {
    scopes: ["openid", "profile"],
};