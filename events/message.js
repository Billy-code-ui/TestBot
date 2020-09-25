const { bot } = require('../index');
const { prefix, owneronlymode } = require('../config.json');

require('dotenv').config();

bot.on('message', async (message) => {
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