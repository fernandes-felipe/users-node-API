'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//load routes
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/', indexRoute);
app.use('/users', userRoute);

module.exports = app;
