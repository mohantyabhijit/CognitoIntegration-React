# CognitoIntegration-React
Sample code to integrate AWS Cognito with React. Simple and easy to understand

Follow the below steps to set up AWS Cognito User Pool

Select Create a new user pool

Enter Name and click on Step through settings

The blow page is one time setupu only. Cannot be Changed afterwards. You can select User attributes and also define custom attributes. As of now just select email

In Next step, we define policy for passwords

Next Page is for MFA and how to recover passwords. Keep it as defaults and select checkbox if required.

Next Page is for setting up custom message for verification.

The next Page is Tags. You can skip it as of now.The next page is Device. You can configure it according to your preference.

Click on add app client in next page. Uncheck Client secret key.

The next Page is Triggers. This can be used if we want to customize the authentication feature. No need to add anything as of now.

Next is the review page. Check the details and create it.


In the folder- 
Open UserPool.Js and enter your AWS Cognito Details.

Now I’ll describe the js files inside component .

UserPool.js → basic configuration file and creates CognitoUserPool class. This is main class to do most of the authentication work.

Account.js - This is a wrapper class in a sense. Contains function through which we can get UserSession, UserAttributes, authenticate User and logout User. This was created seperately because the user may need to verify himself for specific actions. So this separation helps and calling getsession() methods does it automatically. We are again using CognitoUserPool  class here.

ChangePassword.js - Sample js file to showcase how user can change their password once they are logged in.

Login.js - self explanatory

RandomNumber.js - Sample react file to call api agteway and get random number from aws lambda running on backend. fetchNumber  doesn’t requrie authentication to run, while fetchNumbe2 will run when the user is signed in.

Session.js - basic class to showcase whether the user is logged in or not.

Settings.js → this will run only when the user is logged in. This helps in showing ChangePassword.js code.

SignUp.js → Self explanatory. 




You need to run these commands as well in terminal - npm i amazon-cognito-identity-js
