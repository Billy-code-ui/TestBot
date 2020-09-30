const { noPerms } = require('../util/errors.js');
const { MessageEmbed } = require('discord.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return noPerms(message, 'MANAGE_GUILD');

    let memberToMute = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find((x) => x.user.username.toLowerCase() === args.slice(1).join(' ') || x.user.username === args[1])
    if (!memberToMute) return message.channel.send(`Please give me a member to mute and rerun the command!`);

    let reason = args.splice(2).join(" ");
    if (!reason) reason = 'None Provided'

    let mutedRole = message.guild.roles.cache.find(r => r.name === 'Muted');

    if (!mutedRole) {
        await message.guild.roles.create({
            data: {
                name: 'Muted',
                position: message.guild.me.roles.highest.position,
                color: '#818386',
                permissions: ['READ_MESSAGE_HISTORY']
            }
        })
    }

    memberToMute.roles.add(mutedRole)

    let embed = new MessageEmbed()
        .setTitle(`Muted`)
        .setDescription(`**Muted User**\n${memberToMute.user.tag}\n\n**Reason**\n${reason}`)
        .setColor(color)

    message.channel.send(embed)
};


module.exports.config = {
    name: 'mute',
    aliases: [],
    usage: 'mute <member> <reason>',
    description: 'Mute a member in the server!'
};