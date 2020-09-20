const { bot } = require('../index');

bot.on('messageDelete', message => {
    message.channel.send(`imagine deleting a message\n${message.content}`)
});