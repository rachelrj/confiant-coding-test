# Confiant Coding Test

This project should be ran locally alongside [the backend](https://github.com/rachelrj/confiant-coding-test-server-side).
To run this single page react application with yarn installed globally, run:

```
yarn install

yarn start
```

Tests can be ran with:

``
yarn test
``
These scripts also run the lint checks.

## Directions

1) Implement a single page React application and small server side application to process API requests from the client side 
2) The end user should be able to click on one of 3 tabs: “JavaScript”, “CSS” or “HTML” 
3) On click, the user should be able to see a search input and submit button to perform a code search 
4) When submitting, the application should send an asynchronous request to the server side to search code on GitHub using this API:

``
curl \ 
-H "Accept: application/vnd.github.v3+json" \ 
https://api.github.com/search/code?q=[search]+in:file+language:[language]+repo:microsoft/vscode 
``

The endpoint is documented [here](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-code)

The server side application should cache results from GitHub to prevent the client from hitting the endpoint’s rate limit. The searches should not be cached using SQLite3. 
A history of searches should be stored in an SQLite3 table called “searches” containing an ID, the client IP, the search and the search date and time

5) Render the results in a table. The results should include the “name”, “path” and a link to “html_url”. 
6) The final project should include a Readme explaining how to setup and run the application 
7) Please share the project as a private GitHub repository with gabfl-confiant or email it to gab@confiant.com

## Available Scripts

Before running the project, remember to run an npm install.
In the project directory, you can run the following commands:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches Jest to run ui tests. Tests use react-testing-library and react-test-renderer.
There are more traditional unit tests first & additionally Snapshot tests.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn lint`

Runs the eslint. Uses Google style presets.

## Todos

* Break apart App.js into smaller functional components.
* Make api host configurable.
* Improve error handling.
* Improve display for table. Wrap text.
* Make display responsive instead of static width.

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
