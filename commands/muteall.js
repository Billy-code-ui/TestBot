const errors = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return errors.noPerms(message, "MANAGE_GUILD");

    let mutedRole = message.guild.roles.cache.find(r => r.name === 'Muted');
    if (!mutedRole) {
        message.channel.send(`Couldn't find muted role!`)
        return;
    }

    message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(mutedRole))
    message.channel.send(`Muted ${message.guild.members.cache.filter(m => !m.user.bot).size} members!`)
};


module.exports.config = {
    name: 'muteall',
    aliases: [],
    usage: 'muteall',
    description: 'Mute everyone in the guild!'
}