const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('../config');

router.get('/findWeather', (req, res) => {
  const zipcode = req.query.zipcode;
  const url = new URL(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${config.weatherApi}`);


  fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
  .then(json => res.send(json))
  .catch(err => res.status(400).send({
    message: 'This is an error!'
  }))
});

module.exports = router;