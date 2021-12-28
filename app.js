var express = require('express');
var app = express();

app.get('/name', function (req, res) {
    
    console.log(req.query);
    res.send('Bimbim Mulya Krismon');
});

app.get('/first', function (req, res) {
    
    console.log(req.query);
    res.send('Bimbim Mulya');
});

app.get('/last', function (req, res) {
    
    console.log(req.query);
    res.send('Krismon');
});

app.listen(3000);