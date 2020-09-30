const { noPerms } = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return noPerms(message, "MANAGE_GUILD");

    let slowmodeTime = args.splice(1).join(' ');

    if (slowmodeTime.toLowerCase() === 'reset') slowmodeTime = 0

    if (isNaN(slowmodeTime)) return message.channel.send(`Please give me a valid number or type 'reset' to reset the slowmode!`);

    if (message.channel.rateLimitPerUser === parseInt(slowmodeTime)) return message.channel.send(`This channel already has that slowmode!`)
    if (slowmodeTime > 21600) return message.channel.send(`Cannot set slow mode higher than 21600 seconds! (6 Hours)`)

    message.channel.setRateLimitPerUser(slowmodeTime);
    message.channel.send(`Set slowmode to ${slowmodeTime}!`)
};


module.exports.config = {
    name: 'slowmode',
    aliases: [],
    usage: 'slowmode <seconds>',
    description: 'Set a slow mode on the current channel!'
};