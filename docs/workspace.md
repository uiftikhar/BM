# About the workspace

## Node version

The node version used to install the neccessary modules is v14.16.0. A .nvmrc file is provided if you use nvm (highly reccomended) as well a .npmrc to lock the npm version.

---

## FE Workspace

The front end workspace has been skaffolded with Angular v9 using the standard libraries of the framework. Other than that bootstrap v5 styles are provided to help with some tasks that require template markup and styling. All of the default components and examples at bootstrap website can be used out of the box. Please keep in mind that only the styles have been included. You'll have to implement any required scripts in case you need them.

---

## API Server

An express server has been included in the workspace using the json-server module with the json-server-auth for mocking auth/jwt flows.
All related files are under the .system directory. Please do not change those files as are neccesseray for the json server to function properly and therefore the mock API

The API server can be reached at http://localhost:3000

For more information about the route capabilities you can consult [github](https://github.com/typicode/json-server#routes) and for the JSON server auth module [here](https://github.com/jeremyben/json-server-auth)

---

## API Routes

All routes can be reached with or without the api prefix but with a major difference.
Routes with the /api/ prefix need the following header Authorization: Bearer xxx.xxx.xxx and is there to help emulate real scenarios.

### API / Mock DB

- /api/users/:id

- /api/groups/:id

- /api/projects/:id

- /api/genders/:id

### Auth module routes

- /api/login

- /api/register

---

## How do I start?

The project has been configured to proxy requests to the API server from the FE and the default npm start command has been wired to start both the angular development server and the json server.

### To start all of the required services and the development server

```shell
npm start
```

### To start only the frontend development server

```shell
npm run client
```

### To start only the backend server

```shell
npm run server
```
