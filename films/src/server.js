const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use('*', (req, res) => {
    res.status(404).send('not found')
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        message: err.message,
        status: err.statusCode || 500
    })
});

module.exports = server;
