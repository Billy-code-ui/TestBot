const Discord = require('discord.js');
const giphyRandom = require("giphy-random");

const { GIPHY_RANDOM } = process.env

module.exports.run = async (bot, message, args) => {
    let topic = args.splice(1).join(' ')
    if (!topic) return message.channel.send('Please give me a topic there pal!')

    const { data } = await giphyRandom(GIPHY_RANDOM, {
        tag: topic
    })

    message.channel.send({ files: [data.images.downsized_large.url] })
};


module.exports.config = {
    name: 'gif',
    aliases: [],
    usage: 'gif <topic>',
    description: 'Sends a gif with the given topic!'
}