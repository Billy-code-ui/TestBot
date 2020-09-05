const Discord = require('discord.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
        message.channel.send({ files: [res.data.message] })
    }).catch(err => {
        console.log(err)
    })
};


module.exports.config = {
    name: 'dog',
    aliases: [],
    usage: 'dog',
    description: 'Sends a random dog image.'
}