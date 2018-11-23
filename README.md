# Notes app with MERN setup

## User Stories
```
As a user
so that i can keep track of my notes
I can view a list of note titles

As a user
so that I can add to the list of notes
I can create a note

As a user
so that I can view a note
I want to be able to click on a note to view it in full
```

`npm init`

## Express
Install express package
```
npm install --save express
```
## Testing packages
Install the relevant packages
```
npm install --save-dev chromedriver selenium-webdriver mocha chai chai-as-promised
```

Add the following to `package.json`

```
"start": "node server.js",
"test:e2e": "mocha --timeout 20000 Spec/tests.js"
```

## Prepping for React stuff

Install concurrently with `npm i concurrently`

Then install nodemon which will look for changes and stop and start your server when needed

  `npm i nodemon --save-dev`

Set up nodemon as follows:
  in `package.json` file

  add scripts

  ```
"start": "node server.js",
"server": "nodemon server.js",
```

## Set up React app

Install the create react app package globally
`npm i -g create-react-app`


Create an app called client
`create-react-app client`

<!-- in client folder, open `package.json`

after scripts add so you don't need to reference the full path
`"proxy":"http://localhost:5001"` -->
