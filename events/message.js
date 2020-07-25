const Discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs');

module.exports = (bot, message) => {

    let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes

    if(message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase()
    let args = message.content.substring(prefix.length).split(" ");

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot, message, args)
}