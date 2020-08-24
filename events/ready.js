module.exports = (bot, ready) => {
	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setActivity('JavaScript!', { type: 'PLAYING' });
};
