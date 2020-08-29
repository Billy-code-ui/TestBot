const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let total = bot.guilds.cache.size

}


module.exports.config = {
    name: 'guilds',
    aliases: [],
    usage: 'guilds',
    description: 'Shows all the guilds the bot is in!'
}