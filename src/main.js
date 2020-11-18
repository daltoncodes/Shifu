const { config } = require('dotenv');
config();

const token = process.env.TOKEN || 'NO_TOKEN';

const Bot = require('./bot');

const bot = new Bot();
bot.login(token);

const bandiCam = true;
const changingfontAfterthis = true;
