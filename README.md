# Insulin Logger App

API Docs provided by yourself: https://shielded-stream-41346.herokuapp.com/api-docs

## Installation

Clone the repo and run `npm install` to install dependencies.  
Then run `npm run web` to start the server. It will automatically open a browser window.  
Alternately, you can run `npm run ios` to start a iOS simulator and run the app from there.  

## Instructions
___
Implement the following

* Methods to call the backend
* Login Handling
* Retrieving the Logbooks for a user

## Project Info
___
### App.tsx

Contains a basic "navigation" system, to switch between the login screen, and the insulin log screen.  
When no token is set, the login screen is shown. When a token is set, the insulin log screen is shown.

### Login.tsx

Contains two text inputs for the username and password, and a button: "Login".

### InsulinLog.tsx

Contains a ScrollView for displaying the logbooks a user has.  
Also contains a "Logout" button, which logs the user out, and navigates back to the login screen.

### api.ts

Will contain the backend API calls.
