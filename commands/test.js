const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission('SEND_MESSAGES')) {
    if (!message.member.hasPermission('BAN_MEMBERS'))
      return message.channel.send(
        'You do not have permission to use this command!'
      );
    if (!args[1])
      return message.channel.send('Please tell me what to announce!');
    message.delete();
    let text = args.splice(1).join(' ');

    let announceEmbed = new Discord.MessageEmbed()
      .setTitle('**Marabou Interviews!**')
      .setFooter('Marabou AI | Made by windfIxwer')
      .setColor('ff8100')
      .setThumbnail(
        'http://media.discordapp.net/attachments/610855234100658226/737428403388547172/49small.png'
      )
      .setDescription(
        'Greetings, Marabou! We are happy to introduce you our interview session that is being hosted! Why not and come to the interview center for a job?'
      )
      .addField(
        'Its mine now',
        '[Click Here](https://www.roblox.com/games/2632427294/Interview-Center%22)'
      )
      .setImage(
        'https://media.discordapp.net/attachments/610855234100658226/738048691298107523/50d71fa30ea3784f9f279993b06ba835.png'
      );

    let announceChannel = message.guild.channels.cache.find(
      (channel) => channel.name == 'sessions'
    );
    if (!announceChannel)
      return message.channel.send("Couldn't find the announcements channel!");
    announceChannel.send('@here');
    announceChannel.send(announceEmbed);
  }
};

module.exports.config = {
  name: 'test',
  aliases: [],
  usage: 'test',
  description: 'Test command!',
};
