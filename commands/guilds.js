const Discord = require('discord.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let guilds = bot.guilds.cache.map(guild => guild.name);

    let embed = new Discord.MessageEmbed()
        .setTitle('Guilds')
        .setDescription(guilds)
        .setColor(color)
        .setFooter(`${bot.user.username} is in ${bot.guilds.cache.size} guilds!`)

    message.channel.send(embed)
}


module.exports.config = {
    name: 'guilds',
    aliases: [],
    usage: 'guilds',
    description: 'Shows all the guilds the bot is in!'
}