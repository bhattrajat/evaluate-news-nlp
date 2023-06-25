# Project Instructions

This project is a simple NLP evaluator using [meaningcloud](https://www.meaningcloud.com/)'s sentiment analyis api to
evaluate news article text

In the frontend it uses HTML, SCSS & Javascript. It also uses webpack to bundle the code.

In the backend it uses NodeJs & Express to set up a simple web server to connect with meaningcloud's api

## Getting started

Clone this project

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

### Step 1: Signup for a meaningCloud API key
First, you will need to go [here](https://www.meaningcloud.com/developer/login). Signing up will get you an API key. 

### Step 2: Environment Variables

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
