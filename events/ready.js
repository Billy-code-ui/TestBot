const { bot } = require('../index');
const mongo = require('../util/mongo.js');

bot.on('ready', async () => {
	await mongo()

	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setPresence({ activity: { name: 'JavaScript!', type: 'WATCHING' }, status: 'dnd' })
});