const express = require('express');
const router = express.Router();
const app = express();

router.get('/hwbff', (req, res) => {
    console.log('timestamp: ' + new Date().getTime());
    res.json({ message: 'Hello World' });
});

app.use('/', router);

app.listen(3040, function () {
    console.log('App listening on port 3040!');
});