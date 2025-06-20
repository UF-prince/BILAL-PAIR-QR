const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

let server = require('./qr');
let code = require('./pair');

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/qr', server);
app.use('/code', code);

app.get('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'pair.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
