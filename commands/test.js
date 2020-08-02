const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if (message.member.roles.cache.find(r => r.name === "Thunder")) {
    message.channel.send('you do have the  role!')
  } else {
    return message.channel.send('You do not have the role!')
  }
}
module.exports.config = {
  name: 'test',
  aliases: [],
  usage: 'test',
  description: 'Test command!',
};
