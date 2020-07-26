const Discord = require('discord.js');
const errors = require('../util/errors.js');
const ms = require('ms');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  let days = 0;
  let week = 0;
  let uptime = ``;
  let totalSeconds = bot.uptime / 1000;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  if (hours > 23) {
    days = days + 1;
    hours = 0;
  }

  if (days == 7) {
    days = 0;
    week = week + 1;
  }

  if (week > 0) {
    uptime += `${week} week, `;
  }

  if (minutes > 60) {
    minutes = 0;
  }

  uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

  let serverembed = new Discord.MessageEmbed()
    .setColor(color)
    .addField('Uptime', uptime);

  message.channel.send(serverembed);
};

module.exports.config = {
  name: 'uptime',
  aliases: [],
  usage: 'uptime',
  description: 'Shows uptime of the bot!',
};
