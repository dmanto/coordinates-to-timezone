const express = require('express');
const geoTz = require('geo-tz');
const app = express();

const port = 8080;

app.get('/tz.json', (req, res) => {
    res.json(geoTz(req.query.lat, req.query.long));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});