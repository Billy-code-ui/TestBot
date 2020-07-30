const mongoose = require('mongoose');

const GUildScema = mongoose.Schema({
    GuildID: String,
    Prefix: String,
    LogChannel: String,
    WelcomeChannel: String,
})

module.exports = mongoose.model("Guild", GUildScema);