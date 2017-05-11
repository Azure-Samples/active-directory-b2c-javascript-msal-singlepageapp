---
services: active-directory-b2c
platforms: JavaScript
author: jmprieur
---

# JavaScript application signing in users with Azure Active Directory B2C and calling a Web API

This simple sample demonstrates how to use the [Microsoft Authentication Library Previw for JavaScript (msal.js)](https://github.com/AzureAD/microsoft-authentication-library-for-js) to get an access token and call an API secured by Azure AD B2C.

> *IMPORTANT*: Currently, the AAD B2C service does not fully support the implicit flow. This sample works fine with the B2C local identities and the gmail identity provider, but not yet with the Microsoft Personal Identity provider (MSA) or the Twitter identity provider.

## How To Run This Sample

The sample is already configured to use a demo environment and can be run simply by downloading the code and running the app on your machine. Follow the instructions below if you would like to use your own Azure AD B2C configuration.

### Step 1:  Clone or download this repository

From your shell or command line:

`git clone https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp.git`

### [OPTIONAL] Step 2: Create an Azure AD B2C application 

You can run the sample as is with its current settings, or you can optionally register it as a new application under your own developer account. Creating your own app is highly recommended.

If you don't have an Azure AD B2C tenant, you can follow [those instructions](https://azure.microsoft.com/documentation/articles/active-directory-b2c-get-started/) to create one.

> *IMPORTANT*: if you choose to perform one of the optional steps, you have to perform ALL of them for the sample to work as expected.

You can find detailed instructions on how to create a new mobile / native app on [this page](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-application) Make sure to:

- Copy down the **Application Id** assigned to your app, you'll need it in the next optional steps.
- Copy down the **Redirect URI** you configure for your app.

### [OPTIONAL] Step 3: Create your own policies

This sample requires your B2C app to have a policy of type "Sign Up or Sign In".
You can follow the instructions in [this tutorial](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-reference-policies) to create it.
Once created, you will need to replace `bcb2_1_susi` in the `index.html` file with your own policy name.  All B2C policies should begin with `b2c_1_`.

```JavaScript
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

### [OPTIONAL] Step 4: Create your own API

Our sample calls the Web API produced by the following sample [https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi](https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi) (and pre-hosted in Azure). See the [README.md](https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi/blob/master/README.md) file for that sample to understand better how to create your own Web API.

### [OPTIONAL] Step 5:  Configure the Visual Studio project with your app coordinates

1. Open the solution in Visual Studio 2015.
1. Open the `index.html` file.
1. Find the assignment for `ClientID` and replace the value with the Application ID from Step 2.
1. Find the assignment for `authority` and replacing `b2c_1_susi`by the name of the policy you created in Step 3, and `fabrikamb2c.onmicrosoft.com` by the name of the Azure AD B2C tenant.
1. Find the assignment for the scopes `b2cScopes` replacing the URL by the scope URL you created for the Web API, as provided in the B2C application registration portal
1. Find the assignment for API URL `webApi` replacing the current URL by the URL where you deployed your Web API in Step 4.

### Step 4:  Run the sample

1. Make sure you've [installed Node](https://nodejs.org/en/download/).
1. Install the node dependencies: 
        ```
        cd active-directory-b2c-javascript-msal-singlepageapp
        npm install
        npm update
        ```
1. Run the Web application
        ```
        node server.js
        ```
1. With your favorite browser, navigate to `http://localhost:6420`.
1. Click the **login** button at the top of the application screen. The sample works exactly in the same way regardless of the account type you choose, apart from some visual differences in the authentication and consent experience. Upon successful sign in, the application screen will show buttons that allow you to call an API and sign out.
1. Click on the **Call Web API** and see the textual representation of the JSon object which is returned
1. Sign out by clicking the **Logout** button.  

## More information
For more information on Azure B2C, see [the Azure AD B2C documentation homepage](http://aka.ms/aadb2c). 


## Community Help and Support
We use [Stack Overflow](http://stackoverflow.com/questions/tagged/msal) with the community to provide support. We highly recommend you ask your questions on Stack Overflow first and browse existing issues to see if someone has asked your question before. Make sure that your questions or comments are tagged with [msal.js].

If you find and bug or have a feature request, please raise the issue on [GitHub Issues](../../issues). 

To provide a recommendation, visit our [User Voice page](https://feedback.azure.com/forums/169401-azure-active-directory).


## Contributing
If you'd like to contribute to this sample, see [CONTRIBUTING.MD](/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
