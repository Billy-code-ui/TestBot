const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect(process.env.MONGOPASS, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    return mongoose
}