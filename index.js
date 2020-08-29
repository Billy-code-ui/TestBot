const Discord = require('discord.js');
const bot = new Discord.Client();

require('dotenv').config();

require('./handlers')(bot)

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

module.exports = {
	bot: bot
};

bot.login(process.env.TOKEN);