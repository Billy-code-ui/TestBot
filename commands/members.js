const Discord = require('discord.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let members = bot.users.cache.map(user => user.username)

    let embed = new Discord.MessageEmbed()
        .setTitle('Members')
        .setColor(color)
        .setDescription(members)
        .setFooter(`${bot.user.username} is watching ${bot.users.cache.size} members!`)

    message.channel.send(embed)
};


module.exports.config = {
    name: 'members',
    aliases: [],
    usage: 'members',
    description: 'Shows all members of each guild that the bot is in!'
}