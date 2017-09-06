---
services: active-directory-b2c
platforms: javascript
author: jmprieur
---

# Single-Page Application built on MSAL.js with Azure AD B2C

:warning: Silent renewing of access tokens is not supported by all social identity providers.

This simple sample demonstrates how to use the [Microsoft Authentication Library Preview for JavaScript (msal.js)](https://github.com/AzureAD/microsoft-authentication-library-for-js) to get an access token and call an API secured by Azure AD B2C.

## How To Run This Sample

There are two ways to run this sample:
1. **Using the demo environment** - The sample is already configured to use a demo environment and can be run simply by downloading this repository and running the app on your machine. See steps below for Running with demo environment.
2. **Using your own Azure AD B2C tenant** - If you would like to use your own Azure AD B2C configuration, follow the steps listed below for Using your own Azure AD B2C tenant.

## Using the demo environment

This sample demostrates how to sign in or sign up for an account at "Wingtip Toys" - the demo environment for this sample. Once signed-in, clikcing on the **Call Web API** button shows the Display name you used when you created your account. 

### Step 1: Clone or download this repository

From your shell or command line:

```powershell
git clone https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp.git
```

### Step 2: Run the application

From your shell or command line: 

```
cd active-directory-b2c-javascript-msal-singlepageapp
node server.js
```

The console window shows the port number for the web application

```
Listening on port 6420...
```

You can visit `http://localhost:6420` and click the **Login** button to start the Azure AD B2C sign in or sign up workflow.  

## Using the Azure AD B2C Tenant

Now that you have a good idea what this sample application does, it's time to configure the sample to use your own Azure AD B2C tenant. 

### Step 1: Get your own Azure AD B2C tenant

You can also modify the sample to use your own Azure AD B2C tenant.  First, you'll need to create an Azure AD B2C tenant by following [these instructions](https://azure.microsoft.com/documentation/articles/active-directory-b2c-get-started).

### Step 2: Create your own policies

This sample uses three types of policies: a unified sign-up/sign-in policy & a profile editing policy.  Create one policy of each type by following [the instructions here](https://azure.microsoft.com/documentation/articles/active-directory-b2c-reference-policies).  You may choose to include as many or as few identity providers as you wish.

If you already have existing policies in your Azure AD B2C tenant, feel free to re-use those policies.  

### Step 3: Register your own Web API

As you saw in the demo environment, this sample calls a Web API at https://fabrikamb2chello.azurewebsites.net which has the same code as the sample [Node.js Web API with Azure AD B2C](https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi). You'll need to replace the demo environment Web API with your own Web API.

If you do not have your own Web API, you can use the 

you'll need to [register a Web API with Azure AD B2C](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-api) so that you can define the scopes that your single page application will request access tokens for. 


Your web API registration should include the following information:

- Enable the **Web App/Web API** setting for your application.
- Set the **Reply URL** to the appropriate value indicated in the sample or provide any URL if you're only doing the web api registration, for example `https://myapi`.
- Make sure you also provide a **AppID URI**, for example `demoapi`, this is used to construct the scopes that are configured in you single page application's code.
- (Optional) Once you're app is created, open the app's **Published Scopes** blade and add any extra scopes you want.
- Copy the **AppID URI** and **Published Scopes values**, so you can input them in your application's code.

### [OPTIONAL] Step 5: Create your own application

Now you need to [register your single page application in your B2C tenant](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-application), so that it has its own Application ID. Don't forget to grant your application API Access to the web API you registered in the previous step.

Your single page application registration should include the following information:

- Enable the **Web App/Web API** setting for your application.
- Set the **Reply URL** for your app to `http://localhost:6420`
- Once your app is created, open the app's **API access** blade and **Add** the API you created in the previous step.
- Copy the Application ID generated for your application, so you can use it in the next step.

### [OPTIONAL] Step 6: Configure the sample to use your Azure AD B2C tenant

Now you can replace the app's default configuration with your own.  

1. Open the `index.html` file.
1. Find the assignment for `ClientID` and replace the value with the Application ID from Step 5.
1. Find the assignment for `authority` and replacing `b2c_1_susi`by the name of the policy you created in Step 3, and `fabrikamb2c.onmicrosoft.com` by the name of the Azure AD B2C tenant.
1. Find the assignment for the scopes `b2cScopes` replacing the URL by the scope URL you created for the Web API, as provided in the B2C application registration portal
1. Find the assignment for API URL `webApi` replacing the current URL by the URL where you deployed your Web API in Step 4.

```javascript
<script class="pre">
  // The current application coordinates were pre-registered in a B2C tenant.
  var applicationConfig = {
    clientID: 'e760cab2-b9a1-4c0d-86fb-ff7084abd902',
    authority: "https://login.microsoftonline.com/tfp/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
    b2cScopes: ["https://fabrikamb2c.onmicrosoft.com/demoapi/demo.read"],
    webApi: 'https://fabrikamb2chello.azurewebsites.net/hello',
  };
</script>
```

### Step 7: Run the sample

1. Make sure you've [installed Node](https://nodejs.org/en/download/).
1. Install the node dependencies:        
    ```powershell
    cd active-directory-b2c-javascript-msal-singlepageapp
    npm install
    npm update
    ```       
1. Run the Web application       
    ```powershell
    node server.js
    ```      
1. With your favorite browser, navigate to `http://localhost:6420`.
1. Click the **login** button at the top of the application screen. The sample works exactly in the same way regardless of the account type you choose, apart from some visual differences in the authentication and consent experience. Upon successful sign in, the application screen will show buttons that allow you to call an API and sign out.
1. Click on the **Call Web API** and see the textual representation of the JSon object which is returned
1. Sign out by clicking the **Logout** button.  

## More information
For more information on Azure B2C, see [the Azure AD B2C documentation homepage](http://aka.ms/aadb2c). 

## Community Help and Support
We use Stack Overflow with the [msal](https://stackoverflow.com/questions/tagged/msal) and [azure-ad-b2c](https://stackoverflow.com/questions/tagged/azure-ad-b2c) tags to provide support. We highly recommend you ask your questions on Stack Overflow first and browse existing issues to see if someone has asked your question before. Make sure that your questions or comments are tagged with [msal.js].

If you find and bug or have a feature request, please raise the issue on [GitHub Issues](../../issues). 

To provide a recommendation, visit our [Feedback Forum](http://aka.ms/aadb2cuv).

## Contributing
If you'd like to contribute to this sample, see [CONTRIBUTING.MD](/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
