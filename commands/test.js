const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  message.channel.send("|| <@&728745798698926160> ||")
}
module.exports.config = {
  name: 'test',
  aliases: [],
  usage: 'test',
  description: 'Test command!',
};
