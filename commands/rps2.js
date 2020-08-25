const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {

    const acceptedReplies = ['rock', 'paper', 'scissors'];
    const random = Math.floor((Math.random() * acceptedReplies.length));
    const result = acceptedReplies[random];

    const choice = args[1];
    if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
    if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);

    console.log('Bot Result:', result);
    if (result === choice) return message.reply("It's a tie! We had the same choice.");

    switch (choice) {
        case 'rock': {
            if (result === 'paper') return message.reply('I won!');
            else return message.reply('You won!');
        }
        case 'paper': {
            if (result === 'scissors') return message.reply('I won!');
            else return message.reply('You won!');
        }
        case 'scissors': {
            if (result === 'rock') return message.reply('I won!');
            else return message.reply('You won!');
        }
        default: {
            return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        }
    }
}

module.exports.config = {
    name: 'rps2',
    aliases: [],
    usage: 'rps (rock, paper or scissors)',
    description: 'Play rock, paper or scissors with the bot!',
};