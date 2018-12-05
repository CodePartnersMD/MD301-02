# Lab 08: Persistence with a SQL database

## Resources

[Mongoose Docs](https://mongoosejs.com/)

[MLab cloud Based DB](https://mlab.com/)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-08-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── schema.sql
   └── server.js
```

## User Acceptance Tests

### Overview

For this lab assignment, you will use the latitude and longitude to request information about movies filmed in the location and Yelp review for local restaurants.

### Repository set-up

- Continue to work on the same repository from yesterday

### Heroku Deployment

- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as labs 6 and 7. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. 
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working. You may now begin your feature tasks for lab 8.

### Feature #1: Caching data

#### Why are we implementing this feature?

- As a user, I want the application to perform quickly so that I can search for locations frequently and reliably.

#### What are we going to implement?

Given that a user enters a valid location in the input  
When the user clicks the "Explore!" button  
Then the results will be loaded from a database, if previously cached  

Given that a user enters a valid location in the input  
When the user clicks the "Explore!" button  
Then the results will be requested from each individual API, if not previously cached  

Given that a user enters a valid location in the input  
When the user clicks the "Explore!" button  
Then the results will be cached in a database for future retrieval  

Given that a user does not enter a valid location in the input  
When the user clicks the "Explore!" button  
Then the location information will not be displayed  

#### How are we implementing it?

Database set-up:
- setup account at https://www.mlab.com
- create a new sandbox database
- setup a user for your database with username and password
- include link to your database in server.js and separate your username and password into your .env file

Schema Creation:
- follow the steps to connecting to your database using mongoose at https://mongoosejs.com/docs/index.html
- create a schema and model for you API data
- write logic that will first check if the location exists in your DB using the findOne method, then if it does not exist, make a new call and save it to your DB

Server logic:
- Create a function to check the database for the location information.
  - If the location record already exists in the database, send the location object in the response to the client.
  - It it does not exist in the database, request the data from the API, save it in the database, and then send the location object in the response to the client.
- For all of your other models, write a single lookup function that is dynamic and can be shared by all of the models. This lookup function should accept several options:
  - The search query
  - A function to execute if the records exist in the table
  - A function to execute if the records do not exist in the table.
- Within your route callback, invoke your lookup function, passing the appropriate options.
  - If the records exist, send them as the response to the client.
  - If the records do not exist, request the data from the appropriate APIs, as you have in labs 6 and 7. Store the results in the appropriate table in your database and send the API results as the response to the client.
- Redeploy your application.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

