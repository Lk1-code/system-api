const express = require('express');
const app = express();
const sequelize = require('./config/config');


const User = require('./models/user');

sequelize.sync()
    .then(
        () => {
            console.log('Database connect');
        }
    )
    .catch(
        (error) => {
            console.log('Unable to connect', error);
        }
    );
module.exports = app;