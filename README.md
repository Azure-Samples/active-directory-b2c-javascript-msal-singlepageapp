---
page_type: sample
description: "A sample demonstrating how to use the Microsoft Authentication Library for JavaScript to get an access token and call an API secured by Azure AD B2C."
languages:
  - javascript
products:
  - azure-active-directory-b2c
urlFragment: "active-directory-b2c-javascript-msal-singlepageapp"
---

# Single-Page Application built on MSAL.js with Azure AD B2C

> **Warning**: Silent renewing of access tokens is not supported by all social identity providers.

This simple sample demonstrates how to use the [Microsoft Authentication Library for JavaScript (msal.js)](https://github.com/AzureAD/microsoft-authentication-library-for-js) to get an access token and call an API secured by Azure AD B2C.

## How to run this sample

There are two ways to run this sample:

1. **Using the demo environment** - The sample is already configured to use a demo environment and can be run simply by downloading this repository and running the app on your machine. See steps below for Running with demo environment.
2. **Using your own Azure AD B2C tenant** - If you would like to use your own Azure AD B2C configuration, follow the steps listed below for *using your own Azure AD B2C tenant*.

## Using the demo environment

This sample demonstrates how to sign in or sign up for an account at "Wingtip Toys" - the demo environment for this sample. Once signed-in, clicking on the **Call Web API** button shows the display name you used when you created your account.

### Step 1: Clone or download this repository

From your shell or command line:

```bash
git clone https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp.git
```

### Step 2: Run the application

Make sure you've [installed Node](https://nodejs.org/en/download/).

From your shell or command line:

```bash
cd active-directory-b2c-javascript-msal-singlepageapp
npm install && npm update
npm start
```

The console window shows the port number for the web application

```bash
Listening on port 6420...
```

You can visit `http://localhost:6420` and perform the following actions:

1. Click the **Login** button to start the Azure AD B2C sign in or sign up workflow.  
2. Once signed in, you can click the **Call Web API** button to have your display name returned from the Web API call as a JSON object.
3. Click **Logout** to logout from the application.

## Using your own Azure AD B2C Tenant

In the previous section, you learned how to run the sample application using the demo environment. In this section, you'll learn how to configure this single page application sample and the related [Node.js Web API with Azure AD B2C sample](https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi) to work with your own Azure AD B2C Tenant. This will be covered in two parts.

### PART I: Configure the API

#### How to setup and register the Node.js Web API sample

Follow the instructions on the [Node.js Web API with Azure AD B2C sample](https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi). Once you are done, you should have a Node.js web API running on the port 5000. While it runs, continue with **Part II** below.

### PART II: Configure the Client

#### Step 1: Register your own Web Application with Azure AD B2C

Next, you need to [register your single page application in your B2C tenant](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-application).

Provide the following values for the Single Page Application registration:

- Provide a descriptive Name for the single page application, for example, `My Test SPA`. You will identify this application by its Name whenever working in the Azure portal.
- Mark **Yes** for the **Web App/Web API** setting for your application.
- Set the **Reply URL** for your app to `http://localhost:6420`. This sample provided in this repository is configured to run on port 6420.
- Create the application.
- Once the application is created, open your `My Test SPA` and open the **API Access** window (in the left nav menu). Click **Add** and select the name of the Node.js Web API you registered previously, `My Test Node.js Web API`. Select the scope(s) you defined previously, for example, `demo.read` and hit **Save**.

#### Step 2: Configure the sample code to use your Azure AD B2C tenant

Now in the sample code, you can replace the single page application's demo environment configuration with your own tenant.  

1. Open the `authConfig.js` file.
2. Find the assignment for `clientId` and replace the value with the Application ID for the single page application you registered earlier, for example the Application ID found in `My Test SPA` application in the Azure portal.
3. Find the assignment for `authority` and replacing `b2c_1_susi` with the name of the policy you created in Step 2, and `fabrikamb2c.onmicrosoft.com` by the name of your Azure AD B2C tenant, for example `https://<your-tenant-name>.b2clogin.com/<your-tenant-name>.onmicrosoft.com/<your-sign-in-sign-up-policy>`
4. Open the `apiConfig.js` file.
5. Find the assignment for the scopes `b2cScopes` replacing the URL by the scope URL you created for the Web API, e.g. `b2cScopes: ["https://<your-tenant-name>.onmicrosoft.com/helloapi/demo.read"]`
6. Find the assignment for API URL `webApi` replacing the current URL by the URL where you deployed your Web API in Step 4, e.g. `webApi: "https://fabrikamb2chello.azurewebsites.net/hello`

Your resulting code should look as follows:
  
```javascript
const apiConfig = {
  b2cScopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"],
  webApi: "https://fabrikamb2chello.azurewebsites.net/hello"
};

```

```javascript
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

const loginRequest = {
  scopes: ["openid", "profile"],
};

const tokenRequest = {
  scopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};
```

#### Step 3: Run the sample

1. Install the node dependencies if this is your first time running the app (e.g. if you skipped running in the demo environment):

    ```bash
    cd active-directory-b2c-javascript-msal-singlepageapp
    npm install && npm update
    ```

2. Run the Web application:

    ```bash
    npm start
    ```

3. Go to `http://localhost:6420`.
4. Click the **login** button at the top of the application screen. The sample works exactly in the same way regardless of the account type you choose, apart from some visual differences in the authentication and consent experience. Upon successful sign in, the application screen will show buttons that allow you to call an API and sign out.
5. Click on the **Call Web API** and see the textual representation of the JSON object that is returned. Make sure your Node.js Web API sample is still running on port 5000.
6. Sign out by clicking the **Logout** button.  

## Optional

- [Configure application to use b2clogin.com](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-b2c-overview#configure-application-to-use-b2clogincom)
- The MSAL.js library allows you to pass [login_hint parameter](https://docs.microsoft.com/en-us/azure/active-directory-b2c/direct-signin) in the [AuthenticationParameters object](https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL.js-1.0.0-api-release#signing-in-and-getting-tokens-with-msaljs), using `loginHint` attribute.

    ```JavaScript
      const loginRequest = {
        scopes: ["openid", "profile"],
        loginHint: "someone@contoso.com"
      };
    ```

- You can pass any custom query string parameter in the [AuthenticationParameters object](https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL.js-1.0.0-api-release#signing-in-and-getting-tokens-with-msaljs), using `extraQueryParameters` attribute. Following sample sets the campaignId that can be used in the [Azure AD B2C UI](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-ui-customization-custom-dynamic), and the [ui_locales](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-reference-language-customization) set to es (Spanish).

    ```JavaScript
      const loginRequest = {
        scopes: ["openid", "profile"],
        extraQueryParameters: { campaignId: 'hawaii', ui_locales: 'es' }
      };
    ```

## More information

For more information on Azure B2C, see:

- [Azure AD B2C documentation homepage](http://aka.ms/aadb2c)
- [Microsoft authentication library for js Wiki](https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki)
- [Integrate Microsoft Authentication Library (MSAL) with Azure Active Directory B2C](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-b2c-overview)

## Community Help and Support

We use Stack Overflow with the [msal](https://stackoverflow.com/questions/tagged/msal) and [azure-ad-b2c](https://stackoverflow.com/questions/tagged/azure-ad-b2c) tags to provide support. We highly recommend you ask your questions on Stack Overflow first and browse existing issues to see if someone has asked your question before. Make sure that your questions or comments are tagged with [msal.js].

If you find and bug or have a feature request, please raise the issue on [GitHub Issues](../../issues).

To provide a recommendation, visit our [Feedback Forum](http://aka.ms/aadb2cuv).

## Contributing

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
