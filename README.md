# The task

Your task:

1) Deploy this `React` application on the server.\
Environment setup (recommended versions):

* `Node.js` version `14.15.4`

* `npm` version `6.14.10`

* `yarn` version `1.22.10`

2) Setup `CI/CD` process using `GitHub actions` on `push` event into `main` branch.

3) Setup `Apache` or `Nginx` for accessing the application via browser.

# Task inputs

* Server IP is `138.68.106.237`, user - `root`

* Folder `keys/` contains public and private keys for accessing server through SSH tunel

* Commands for testing and building are listed below

# Commands

### `npm install`

Installing all dependencies listed in `package.json`.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

In order to run tests in non-interactive mode use following command:
```
yarn test -- --watchAll=false
```

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
