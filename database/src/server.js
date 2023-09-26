const express = require('express');
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));


server.use(require('./routes'));

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        message: err.message || 'Error, intentalo mas tarde',
        status: err.statusCode || 500
    });
});

module.exports = server;