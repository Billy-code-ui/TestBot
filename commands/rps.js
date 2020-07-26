const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  let rps = ['scissors', 'paper', 'rock'];
  let i;
  if (!rps.includes(args[1]))
    return message.reply('Please choose rock, paper or scissors.');
  if (args[1].includes('rock')) {
    i = 2;
  }

  if (args[1].includes('paper')) {
    i = 1;
  }

  if (args[1].includes('scissors')) {
    i = 0;
  }

  if (rps[i]) {
    let comp = Math.floor(Math.random() * 3 + 1);
    let comp_res = parseInt(comp) - parseInt('1');
    let comp_val = rps[parseInt(comp_res)];
    if (i === comp_res) {
      return message.channel.send(
        `You chose **${args[1]}** and I chose **${comp_val}** and we tied, wanna try again?`
      );
    }
    if (i > comp_res) {
      return message.channel.send(
        `You chose **${args[1]}** and I chose **${comp_val}** and I won! Well played.`
      );
    }
    if (i < comp_res) {
      return message.channel.send(
        `You chose **${args[1]}** and I chose **${comp_val}** and I lost! Congrats on winning!`
      );
    }
  }
};

module.exports.config = {
  name: 'rps',
  aliases: [],
  usage: 'rps (rock, paper or scissors)',
  description: 'Play rock, paper or scissors with the bot!',
};
