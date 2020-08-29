const { bot } = require('../index');

bot.on('ready', async () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setActivity('JavaScript!', { type: 'PLAYING' });
});