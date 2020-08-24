const mongoose = require('mongoose');

const prefixSchema = mongoose.Schema({
	GuildID: String,
	Prefix: String,
});

module.exports = mongoose.model('Prefix', prefixSchema);
