const Discord = require('discord.js');
const axios = require('axios');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    axios.get('https://opentdb.com/api.php?amount=1').then(res => {
        const filter = m => m.author.id === message.author.id

        let embed = new Discord.MessageEmbed()
            .setTitle('Quiz Game')
            .addFields(
                {
                    name: 'Question',
                    value: res.data.results[0].question
                },
                {
                    name: 'Difficulty',
                    value: res.data.results[0].difficulty
                },
                {
                    name: 'Category',
                    value: res.data.results[0].category
                }
            )
            .setColor(color)
        message.channel.send(embed)
        message.channel.awaitMessages(filter, { max: 1, }).then(async collected => {
            if (collected.first().content.toLowerCase() === res.data.results[0].correct_answer.toLowerCase()) {
                message.channel.send(`Correct answer!`)
            } else {
                message.channel.send(`Incorrect. Correct answer was: ${res.data.results[0].correct_answer}`)
            }
        })
    }).catch(err => {
        console.log(err)
    });
};


module.exports.config = {
    name: 'quiz',
    aliases: [],
    usage: 'quiz',
    description: 'Asks a random question!'
}