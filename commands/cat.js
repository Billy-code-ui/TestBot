const Discord = require('discord.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    axios.get('https://api.thecatapi.com/v1/images/search').then(res => {
        message.channel.send({ files: [res.data[0].url] })
    }).catch(err => {
        console.log(err)
    })
};


module.exports.config = {
    name: 'cat',
    aliases: [],
    usage: 'cat',
    description: 'Sends a random cat image.'
}