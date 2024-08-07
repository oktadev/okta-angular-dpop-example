# Angular Demonstrating Proof-of-Possession Example

This repository contains a working example of migrating an Angular app to use DPoP when interacting with Okta APIs.  Please read [Secure OAuth 2.0 Access Tokens with Proofs of Possession][blog] for a detailed guide through.

**Prerequisites**

* Node 18 or greater
* Okta CLI
* Angular CLI
* Your favorite IDE
* A web browser with good debugging capabilities
* Terminal window
* An HTTP client that shows the HTTP requests and responses, such as the [Http Client VS Code extension](https://marketplace.visualstudio.com/items?itemName=Aaron00101010.http-client) or [curl](https://curl.se/)


> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

- [Angular Demonstrating Proof-of-Possession Example](#angular-demonstrating-proof-of-possession-example)
  - [Getting Started](#getting-started)
    - [Create an OIDC Application in Okta](#create-an-oidc-application-in-okta)
  - [Links](#links)
  - [Help](#help)
  - [License](#license)

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/oktadev/okta-angular-standalone-runtime-config-example.git
cd okta-angular-standalone-runtime-config-example
npm ci
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI.

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
- Type of Application: **2: SPA**
- Redirect URI: `http://localhost:4200/login/callback`
- Logout Redirect URI: `http://localhost:4200`

The application configuration will print to your screen:

```shell
Okta application configuration:
Issuer:    https://<OKTA_DOMAIN>.okta.com/oauth2/default
Client ID: <CLIENT_ID>
```

Update `src/app.config.json` with your Okta settings.

```json
{
    "issuer": "https://{yourOktaDomain}",
    "clientId": "{yourClientId}"
}
```

There's a manual change to make in the Okta Admin Console. Add the **Refresh Token** grant type to your Okta Application. Open a browser tab to sign in to your [Okta developer account](https://developer.okta.com/login/). Navigate to **Applications** > **Applications** and find the Okta Application you created. Select the name to edit the application. Find the **General Settings** section and press the **Edit** button to add a Grant type. Activate the **Refresh Token** checkbox and press **Save**.

Start the app by running

```shell
npm start
```

## Links

This example uses the following open source libraries from Okta:

* [Okta Auth JavaScript SDK](https://github.com/okta/okta-auth-js)
* [Okta Angular SDK](https://github.com/okta/okta-angular)
* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post][blog], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

[blog]: https://developer.okta.com/blog/2024/09/10/angular-dpop-jwt
