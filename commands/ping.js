const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  var ping = Date.now() - message.createdTimestamp + 'ms';
  let embed = new Discord.MessageEmbed()
    .setTitle(':ping_pong: Pong!')
    .setColor('RANDOM')
    .addFields({ name: 'API Ping', value: `${ping}`, inline: false });

  message.channel.send(embed);
};

module.exports.config = {
  name: 'ping',
  aliases: ['pong'],
  usage: 'ping',
  description: 'Shows API ping of the bot!',
};
