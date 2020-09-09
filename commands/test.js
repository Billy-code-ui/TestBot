const Discord = require('discord.js');
const { color } = require('../config.json');
const errors = require('../util/errors.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '317074864538386443') return errors.noPerms(message, 'ID: 317074864538386443');

    let thingtosearch = args.splice(1).join(' ')
    if (!thingtosearch) return message.channel.send(`Please give me something to search!`)

    let embed = new Discord.MessageEmbed()
        .setTitle('Searching...')
        .setColor(color)

    const a = await message.channel.send(embed)

    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage()

    await page.goto(`https://www.google.com/search?q=${thingtosearch}`, { waitUntil: "networkidle2" })

    await page.screenshot({ path: screenshot })

    await browser.close()

    console.log("ss:" + screenshot)
    //await embed.setTitle('')
    //await embed.setImage(ss.b)

    //await a.edit(embed)
}


module.exports.config = {
    name: 'test',
    aliases: [],
    usage: 'test',
    description: 'Test command!',
}