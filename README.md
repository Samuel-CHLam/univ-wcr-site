# University College WCR Website

> We thank MIT Web.Lab for providing the skeleton code for the website.

Note that the project has been ejected from the usual React packages, so the usual commands like `npm start` may not work as expected, see below.

# How to run this skeleton
- Open two seperate terminals: 
    1. `npm run hotloader` in the first, and 
    2. `npm start` in the second.
- Then open http://localhost:5050

> The above command will only work if the following setups have been done:
> - You have a bash console (on Mac or Linux, this is Terminal. On Windows, we recommend Git Bash)
> - NodeJS version over 18. If it is installed correctly, typing `node --version` should give version over 18.13.0 and `npm --version` should give version over 8.19.3
> - Visual Studio Code (or another code editor), with the Prettier VSCode extension
> Please refer to [this document](https://bit.ly/weblab-install) for installation

# Todo: authentication
> If using Google OAuth, you will need to obtain a CLIENT_ID, instructions are at https://bit.ly/gauth-mit. Then,
> - Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID, and
> - Change the Server CLIENT_ID to the same CLIENT_ID (auth.js)

But we will use Microsoft Azure AD, so steps will be different.

# Todo: database setup
Once a new account for the website has been setup, the following steps need to be changed.
- Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the MongoDB setup. remember to replace <password> and <dbname> (should be no < or > in your SRV) (From: https://bit.ly/mongo-setup)
- Change the Database Name for MongoDB to whatever you put in the SRV to replace <dbname> (server.js)

# Todo: actual development
Check out this [How to Get Started Guide](http://weblab.is/get-started) -->

## Edit at your own risk

the following files students do not need to edit. feel free to read them if you would like.

```
client/src/index.js
client/src/utilities.js
client/src/client-socket.js
server/validator.js
server/server-socket.js
.babelrc
.npmrc
.prettierrc
package-lock.json
webpack.config.js
```

## Good luck on your project :)
