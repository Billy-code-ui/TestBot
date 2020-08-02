const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');
const config = require('../config.json')
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes
  let helpArray = message.content.split(" ");
  let helpArgs = helpArray.slice(1);

  const allcommands = fs.readdirSync('./commands/').filter(f => f.split(".").pop() === "js");

  if (!helpArgs[0]) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(`List of commands to use:`)
      .setDescription(allcommands - 3)
      .addFields({ name: 'Prefix', value: `${prefix}`, inline: true })
      .setColor(color)

    message.channel.send(embed);
  }

  if (helpArgs[0]) {
    let command = helpArgs[0];

    if (bot.commands.has(command)) {

      command = bot.commands.get(command);
      var embed = new Discord.MessageEmbed()
        .setAuthor(`Help for The ${command.config.name} Command!`)
        .setDescription(`
          - **Description:** __${command.config.description || "There is no Description for this command."}__
          - **Usage:** __${prefix}${command.config.usage || "No Usage"}__
          `)
        .setColor(color)
        .setThumbnail(bot.user.avatarURL())

      message.channel.send(embed);
    }
  }
};

module.exports.config = {
  name: 'help',
  aliases: ['h', 'commands'],
  usage: 'help',
  description: 'Shows help command!',
};
