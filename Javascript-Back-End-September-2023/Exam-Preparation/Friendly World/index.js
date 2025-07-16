const express = require('express');
const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');
const databaseConfig = require('./config/databaseConfig');

async function start() {
    const app = express();

    expressConfig(app);
    routesConfig(app);
    await databaseConfig(app);

    app.listen(3000, () => console.log('Server is listening on port 3000...'));
}

start();
