const { bot } = require('../index');

const Discord = require('discord.js');
const { prefix, owneronlymode } = require('../config.json');
const fs = require('fs');
const mongoose = require('mongoose');

require('dotenv').config();

bot.on('message', async (message) => {

    /*mongoose.connect(process.env.mongoPass, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const prefixes = require('../models/prefixes.js');
    prefixes.findOne(
        {
            guildID: message.guild.id
        },
        (err, prefix) => {
            if (err) console.log(err)
            if (!prefix) {
                const newPrefix = new prefixes({
                    guildID: message.guild.id,
                    Prefix: '-',
                });
                newPrefix.save.save().catch((err) => console.log(err));
            } else {
                let prefix = prefix.Prefix

                }
        }
    );
    */

    if (message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase()
    let args = message.content.substring(prefix.length).split(" ");

    if (message.mentions.has(bot.user) && !args[1] && message.content !== "@everyone" && message.content !== "@here") {
        message.channel.send(`My prefix here is ${prefix}`)
    }

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) {
        if (owneronlymode === "true" && message.author.id !== '317074864538386443') return message.channel.send(`The bot is currently in owner only mode.`)
        commandfile.run(bot, message, args)
    }
})