# React Template

## Installing prerequisites

Node: 16.4.1

### Node version

It is _highly_ recommended to use [nvm](https://github.com/nvm-sh/nvm#install--update-script) to manage your node versions.

```sh
nvm install 16.4.1
```

## Yarn

After installing the node version you should also install the yarn
package manager using npm.

```sh
npm install --global yarn
```

Yarn is a package manager as well as npm that addresses security and
performance shortcomings from npm.

## Packages

After installing yarn we can install all the required packages
(defined in `package.json` and locked in `yarn.lock`).

```
yarn install
```

## Env

All envs have to be setup in a `.env.development` file for dev
environment and `.env.test` file for testing environment.

The primary env variable is `REACT_APP_API_URL` for the api variable.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs the linter (eslint in this case) and warns for all
offenses through the command line.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Guidelines

Guidelines for style and format of code should be followed to
ensure readability as well as productivity.

The source code uses typescript for typechecking. For formatting we
use prettier and for code style eslint, following
[https://github.com/airbnb/javascript](airbnb's style guide for js).

## Deployment

For deployment we will use [Heroku Buildpack for create-react-app](https://github.com/nhutphuongit/create-react-app-buildpack#commit--deploy-%EF%B8%8F).
This will take care of all dependencies for build processes done at heroku.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
