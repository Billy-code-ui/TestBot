const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_GUILD'))
    return errors.noPerms(message, 'MANAGE_GUILD');
  if (!args[1]) return message.channel.send('Please give me a message to say!');
  message.delete();
  let text = args.splice(1).join(' ');
  message.channel.startTyping();
  setTimeout(() => {
    message.channel.stopTyping();
    message.channel.send(text);
  }, 1000);
};

module.exports.config = {
  name: 'say',
  aliases: ['send'],
  usage: 'say (something to say)',
  description: 'Makes the bot say the given message!',
};
