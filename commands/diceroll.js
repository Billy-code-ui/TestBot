const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if (!args[1]) {
    args[1] = 6;
  }

  let result = Math.floor(Math.random() * Math.floor(args[1]));
  message.channel.send(`I rolled ${result + 1}!`);
};

module.exports.config = {
  name: 'diceroll',
  aliases: [],
  usage: 'diceroll',
  description: 'Roll a dice and get a random number one to six!',
};
