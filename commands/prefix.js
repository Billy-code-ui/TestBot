const Discord = require('discord.js');
const fs = require('fs');
const errors = require('../util/errors.js');
const { color } = require('../config.json');
const mongoose = require('mongoose');

module.exports.run = async (bot, message, args) => {
  
};

module.exports.config = {
	name: 'prefix',
	description: 'Change the prefix of the bot!',
	usage: 'prefix',
	aliases: ['setprefix'],
};
