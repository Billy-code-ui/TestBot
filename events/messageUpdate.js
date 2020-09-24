const { bot } = require('../index');
const { MessageEmbed } = require('discord.js');
const { color } = require('../config.json');

bot.on('messageUpdate', async (oldMessage, newMessage) => {
    if (newMessage.author.id === bot.user.id) return;

    let logschannel = newMessage.guild.channels.cache.find(r => r.name === 'moderation-logs');
    if (!logschannel) return;


    let embed = new MessageEmbed()
        .setTitle(`Message Edited`)
        .setDescription(`Edited in **${newMessage.channel.name}** by **${newMessage.member.user.tag}**!`)
        .addFields(
            {
                name: "Message",
                value: newMessage.content,
            }
        )
        .setColor(color)


    logschannel.send(embed)
})