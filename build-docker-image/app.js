var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('requested /');
    res.send('<h1>Hello World!</h1></br>eg: GET /p?tagId=5 or GET /p/5');
});

// GET /p?tagId=5
// tagId is set to 5
app.get('/p', function (req, res) {
    console.log(`tagId is set to ${req.query.tagId}`);
    res.send(`<h1>Applicatio!</h1></br><h1>tagId is set to ${req.query.tagId}</h1></br>eg: GET /p?tagId=5 or GET /p/5`);
});

// GET /p/5
// tagId is set to 5
app.get('/p/:tagId', function (req, res) {
    console.log(`tagId is set to ${req.params.tagId}`);
    res.send(`<h1>Application!</h1></br><h1>tagId is set to ${req.params.tagId}</h1></br>eg: GET /p?tagId=5 or GET /p/5`);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
