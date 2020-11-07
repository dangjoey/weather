require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  port: Number(process.env.PORT) || 3000,

  weatherApi: process.env.WEATHER
}