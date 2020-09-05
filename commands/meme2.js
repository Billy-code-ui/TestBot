const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    axios.get('https://meme-api.herokuapp.com/gimme').then(res => {
        message.channel.send({ files: [res.data.url] })
    }).catch(err => {
        console.log(err)
    })
};

module.exports.config = {
    name: 'meme2',
    aliases: [],
    usage: 'meme2',
    description: 'Sends a random meme to the channel!'
}