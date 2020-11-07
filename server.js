const express = require('express');
const { readFile } = require('fs');
const app = express();
const weather = require('./route/weather');
const config = require('./config');

app.get('/', (req, res) => {
  readFile('./index.html', 'utf8', (err, html) => {
    if (err) {
      console.log(err);
    }
    res.send(html);
  })
})

app.use('/', weather);
app.use(express.static(__dirname + '/public'));

app.listen(config.port);