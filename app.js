const express = require('express');
const request = require('request');
const app = express();

app.get(`/`, (req, res) => {
    request('https://teamtreehouse.com/carlosmota2.json', { json: true }, (error, response, body) => {
        res.status(200).send(body); //! this is using express and request npm install
    });
});

app.listen(3000,() => {
    console.log('Example app listening on port 3000!');
});