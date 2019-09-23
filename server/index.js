const express = require('express');
const compression = require('compression');

const config = require('../config');

const app = express();

app.set('port', config.port);

app.use(compression());

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
