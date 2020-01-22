const http = require('http');
const axios = require('axios');
const express = require('express');

class Bear {
    constructor(type, weight, teeth) {
        this.type = type;
        this.weight = weight;
        this.teeth = teeth;
    }
};

const sampleBear = new Bear('Polar', '2000lb', 'very sharp teeth');

const app = express();

app.use('/api', (req, res, next) => {
    res.send('<p>This bear type is: </p>' + sampleBear.type + '<br><br>'
    + '<p>It weighs: </p>' + sampleBear.weight + '<br><br>' +
    '<p>This bear has: </p>' + sampleBear.teeth);
});

app.use('/', (req, res, next) => {
    res.send("<h1 style='color:#606;'>HELLO! WELCOME TO MY SERVER!</h1>");
});

app.listen(5000);