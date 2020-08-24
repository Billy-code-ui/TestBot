const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');
const mongoose = require('mongoose');

require('dotenv').config();

module.exports.run = async (bot, message, args) => {
  mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!message.member.hasPermisison("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");

  return message.channel.send(`This command is currently down!`);

  const prefixes = require('../models/prefixes.js');

  let desiredPrefix = args.splice(1).join(" ");

  prefixes.findOne(
    {
      guildID: message.guild.id
    },
    (err, prefix) => {
      if (err) console.log(err);
      if (!prefix) {
        const newPrefix = new prefixes({
          guildID: message.guild.id,
          prefix: desiredPrefix,
        });
        newPrefix.save.save().catch((err) => console.log(err));
      } else {
        prefix.prefix = desiredPrefix
      }
      prefixes.save().catch((err) => console.log(err));
    }
  )
};

module.exports.config = {
  name: 'prefix',
  description: 'Change the prefix of the bot!',
  usage: 'prefix',
  aliases: ['setprefix'],
};
