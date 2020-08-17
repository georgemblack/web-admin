# Web Admin

* Front-end uses React, Redux, React-Redux, Redux-Thunk.
* Build is performed by wepack, with two configurations (for local & prod)

## Running Locally

Assuming you have:

* A recent version of `node`
* `yarn` package manager

Run:

```
yarn && yarn start
```

This will start the `webpack-dev-server` on `9001` (configurable in `webpack.config.js`).

## Infrastructure

The Web Admin is hosted as a service on Google Cloud Run.
