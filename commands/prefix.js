const Discord = require('discord.js');
const fs = require('fs');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_GUILD'))
    return errors.noPerms(message, 'MANAGE_GUILD');
  if (!args[1])
    return message.channel.send('Please give me the desired prefix!');
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));

  (prefixes[message.guild.id] = {
    prefixes: args[1],
  }),
    fs.writeFile('./prefixes.json', JSON.stringify(prefixes), (err) => {
      if (err) console.log(err);
    });

  let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('New Prefix!')
    .setDescription(`Set to ${args[1]}`);

  message.channel.send(embed);
};

module.exports.config = {
  name: 'prefix',
  description: 'Change the prefix of the bot!',
  usage: 'prefix',
  aliases: ['setprefix'],
};
