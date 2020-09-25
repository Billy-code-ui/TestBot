const Discord = require('discord.js');
const { color } = require('../config.json');

module.exports.noPerms = (message, perm) => {
  let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Insufficient Permissions')
    .setDescription(`Required Permission:\n${perm}`);

  message.channel.send(embed);
};
