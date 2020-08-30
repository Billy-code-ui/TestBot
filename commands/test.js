const Discord = require('discord.js');
const { color } = require('../config.json');
const errors = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '317074864538386443') return errors.noPerms(message, 'ID: 317074864538386443');

    if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, 'ADMINISTRATOR')

    const filter = m => m.author.id === message.author.id;

    message.channel.send(`Number guessing game started...\n**${message.member.user.tag}** is currently choosing a number!`)
    const msg = await message.member.send(`Hey there! Which number would you like?`)

    msg.channel.awaitMessages(filter, { max: 1 }).then(async collected => {
        msg.channel.send(`Game started!`);

        message.channel.send(`**Game started. Start guessing!**`)

        const filter2 = m => m.content.includes(collected.first().content)

        message.channel.awaitMessages(filter2, { time: 60000, errors: ['time'] }).then(async message => {
            if (message.content === collected.first().content) {
                return message.channel.send(`**${message.member.user.tag}** has guessed the correct number!`)
            } else {
                message.channel.send(`${message.author} incorrect.`)
            }
        })
    })
}


module.exports.config = {
    name: 'test',
    aliases: [],
    usage: 'test',
    description: 'Test command!',
}