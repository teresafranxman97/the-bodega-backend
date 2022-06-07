const express = require('express');

const server = express();

server.get('/hello', (req, res) => {
    res.json({ message: "HELLO"})
})

module.exports = server;