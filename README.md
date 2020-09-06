# Tada List

Tada List is a simple Todo List made with Node, Express, MongoDB, and Vue.

## How to run
1. Install Node and npm
2. Run `npm install` in the root folder
3. Run `npm install` in the `client` folder
4. Run `npm build` in the client folder
5. In the root `.env` set values for
```
NODE_ENV=development
PORT=4050
mongouser=[user]
mongopass=[pass423]
mongocluster=[cluster0]

DOMAIN=[localhost:8080]
AUTHCLIENTID=[gibberish]
AUDIENCE=localhost:8080
AUTH_DOMAIN=[domain segment].us.auth0.com
```
6. Run `node server.js` in the root folder
7. Navigate to `localhost:4050`

## License
[MIT](https://choosealicense.com/licenses/mit/)

