const Discord = require('discord.js');
const fs = require('fs');
const config = require('../config.json');

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Insufficient Permissions")
    .setDescription(`Required Permission: \n ${perm}`)

    message.channel.send(embed)
}