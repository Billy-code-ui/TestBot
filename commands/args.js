const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!args[1]) return message.channel.send(`Please give me more than one argument for this to work!`);

    message.channel.send(args)
};


module.exports.config = {
    name: 'args',
    aliases: [],
    usage: 'args <args>',
    description: 'Shows the args of the message!'
}