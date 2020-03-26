const express = require('express');
const router = express.Router();
const app = express();

router.get('/v1/hello', (req, res) => {
    console.log('timestamp: ' + new Date().getTime());
    res.json({ message: 'Hello World!' });
});

router.get('/healthcheck', (req, res) => {
    console.log('timestamp: ' + new Date().getTime());
    res.json({ status: 'UP' });
});

app.use('/', router);

app.listen(3040, function () {
    console.log('App listening on port 3040!');
});