const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let place = args.splice(1).join(" ");
    if (!place) return message.channel.send(`Please give me a location!`)

    axios.get(`https://api.weatherapi.com/v1/current.json?key=0209792dae194b17ae1171135200909&q=${place}`).then(res => {
        let embed = new MessageEmbed()
            .setTitle('Weather')
            .setColor(color)
            .setThumbnail('http:' + res.data.current.condition.icon)
            .setDescription(`Weather for ${res.data.location.name}, ${res.data.location.region}.`)
            .addFields(
                {
                    name: 'Temperature',
                    value: res.data.current.temp_f + '°F\n' + res.data.current.temp_c + '°C',
                    inline: true
                },
                {
                    name: 'Feels Like',
                    value: res.data.current.feelslike_f + '°F\n' + res.data.current.feelslike_c + '°C',
                    inline: true
                },
                {
                    name: 'Humidity',
                    value: res.data.current.humidity,
                    inline: true
                },
                {
                    name: 'Wind Speed',
                    value: res.data.current.wind_mph + 'mph\n' + res.data.current.wind_kph + 'kph',
                    inline: true
                },
                {
                    name: 'Wind Direction',
                    value: res.data.current.wind_dir,
                    inline: true
                },
                {
                    name: 'Visibility',
                    value: res.data.current.vis_miles + ' Miles\n' + res.data.current.vis_km + ' Kilometers',
                    inline: true
                }
            )
            .setFooter(`Last Updated: ${res.data.current.last_updated} • Country: ${res.data.location.country}`)

        message.channel.send(embed)
    }).catch(() => {
        message.channel.send(`Couldn't find location...`)
    })
};


module.exports.config = {
    name: 'weather',
    aliases: [],
    usage: 'weather <locaton>',
    description: 'Shows the weather at the given location!'
}