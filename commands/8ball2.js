const Discord = require('discord.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    let question = args.splice(1).join(' ');
    if (!question) return message.reply(`Please give me a question!`)

    axios.get(`https://8ball.delegator.com/magic/JSON/${question}`).then(res => {
        message.reply(res.data.magic.answer)
    }).catch(err => {
        console.log(err)
    })
};


module.exports.config = {
    name: '8ball2',
    aliases: [],
    usage: '8ball2 <question>',
    description: 'Ask the masgical 8ball a question.'
}