const { Client, Collection } = require('discord.js');
const bot = new Client();

require('dotenv').config();

require('./handlers')(bot);

bot.commands = new Collection();
bot.aliases = new Collection();

module.exports = {
	bot: bot,
};

bot.login(process.env.TOKEN);