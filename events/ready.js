module.exports = (bot, ready) => {
    console.log(`Logged in as ${bot.user.tag}!`)
    bot.user.setActivity("por... youtube!", { type: "WATCHING" })
}