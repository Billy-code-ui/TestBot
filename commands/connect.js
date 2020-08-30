const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`Please join a voice channel and try again!`)
    let channel = message.member.voice.channel
    channel.join()
    message.channel.send(`Connected.`)
};


module.exports.config = {
    name: 'connect',
    aliases: [],
    usage: 'connect',
    description: 'Joins the current voice channel!'
}