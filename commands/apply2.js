const Discord = require("discord.js");
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (message.channel.name !== 'staff-applications') return;
    message.delete()

    //return message.channel.send(`Staff applications are currently closed!. Please try again later.`).then(r => r.delete({ timeout: 5000 }))

    let embed = new Discord.MessageEmbed()
        .setTitle(`Application started in DM by ${message.author.username}!`)
        .setColor(color)

    message.channel.send(embed)
        .then(msg => {
            msg.delete({ timeout: 5000 })
        })

    const filter = m => m.author.id === message.author.id;

    let startembed = new Discord.MessageEmbed()
        .setTitle(`Application Started - Type "cancel" at any time to cancel the application!`)
        .setColor(color)

    let qembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Minecraft Username?")

    let cancelembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Canceled.")

    let submitedembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Application Successfully Summited")

    message.member.send(startembed)
    const a = await message.member.send(qembed)
    a.channel.awaitMessages(filter, { max: 1 }).then(async q1 => {
        if (q1.first().content === 'cancel') {
            return a.channel.send(cancelembed)
        };
        embed.setTitle("Working!")
        await a.edit(embed)
        q1.first().delete()
    });
}


module.exports.config = {
    name: "apply2",
    aliases: [],
    usage: "apply",
    description: "Apply for staff!",
}