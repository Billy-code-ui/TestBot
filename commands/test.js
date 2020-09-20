const Discord = require('discord.js');
const { color } = require('../config.json');
const errors = require('../util/errors.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '317074864538386443') return errors.noPerms(message, 'ID: 317074864538386443');
}

module.exports.config = {
    name: 'test',
    aliases: [],
    usage: 'test',
    description: 'Test command!',
}