'use strict';

const express = require('express');
const geoTz = require('geo-tz');

const port = 8080;
const host = '0.0.0.0';

const app = express();
app.get('/tz.json', (req, res) => {
    res.json(geoTz(req.query.lat, req.query.long));
});

app.listen(port, () => {
    console.log(`App listening on http://${host}:${port}!`);
});