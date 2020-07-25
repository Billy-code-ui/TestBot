const mongoose = require('mongoose');

const PrefixScema = mongoose.Schema({
    GuildID: String,
    Prefix: String,
})

module.exports = mongoose.model("Prefix", PrefixScema);