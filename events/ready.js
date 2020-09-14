const { bot } = require('../index');

bot.on('ready', async () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setPresence({ activity: { name: 'JavaScript!', type: 'WATCHING' }, status: 'dnd' })
});