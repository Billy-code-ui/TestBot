const Discord = require('discord.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist,sexist&format=txt').then(res => {
        message.channel.send(res.data)
    }).catch(err => {
        console.log(err)
    })
};


module.exports.config = {
    name: 'joke',
    aliases: [],
    usage: 'joke',
    description: 'Sends a random joke!'
}