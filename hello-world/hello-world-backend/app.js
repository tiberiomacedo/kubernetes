const express = require('express');
const router = express.Router();
const app = express();

const contextPath = '/mvbff/greetings';
const { version } = require('./package.json');

router.get(contextPath + '/v1/hello', (req, res) => {
    console.log('timestamp: ' + new Date().getTime());
    res.json({ message: 'Hello World!' });
});

router.get('/version', (req, res) => {
  res.status(200).json({ version });
});

router.get('/healthcheck', (req, res) => {
  return res.status(200).json({ status: 'UP' });
});

app.use('/', router);

app.listen(3040, function () {
    console.log('App listening on port 3040!');
});