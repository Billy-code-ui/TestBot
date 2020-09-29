module.exports.run = async (bot, message, args) => {
    const a = await message.channel.send(`Verifying...`);

    const verificationSuccessful = () => {
        //What to do if they are an actual human
        /*
        Example: 
        let role = message.guild.roles.cache.find(r => r.name === 'Verified');
        message.member.roles.add(role)
        */
    };

    let captcha = message.member.user.discriminator

    const msg = await message.member.send(`Hey there! Please type your discriminator to verify yourself.\n\nDon't know what this is?\nExample Username: Bob#6819\nYour discriminator would be and you would type 6819 in this dm!`).catch(() => { return message.channel.send(`Cannot send dms to you! Please turn on dms from server members and rerun the command!`) });

    const filter = m => m.author.id === message.author.id;

    msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(async collected => {
        if (collected.first().content === captcha) {
            a.edit(`Successfully verified!`);
            msg.channel.send(`Successfully verified!`)
            verificationSuccessful()
        } else {
            a.edit(`Failed to verify!`)
            msg.channel.send(`Failed to verify!`)
        }
    }).catch(() => {
        msg.channel.send(`Out of time! You did not respond within the 30 second time limit!`);
        a.edit(`You did not respond within the 30 second time limit!`)
    })
};


module.exports.config = {
    name: 'captcha2',
    aliases: ['verify2'],
    usage: 'captcha2',
    description: 'Verify yourself via captcha!'
};