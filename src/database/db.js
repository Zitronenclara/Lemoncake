// IMPORTANT IMPORTS
const mongoose = require('mongoose')
const config = require('./../../config.json')
const hash = require('object-hash')

// IMPORTED MODELS
const User = require('./models/user.js')

module.exports.connect = function (){
    mongoose.connect(config.DBurl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) throw err;
        console.log('successfully connected to database');
    });
}

module.exports.loadBotUser = async function (userid){
    id = hash(userid)

    let doc = await User.findOne({userid: id}).exec().catch(err => console.log(err));

    //CREATE NEW IF NONE
    if (doc === null) {
        const newDoc = await new User({
            userid: id
        });
        await newDoc.save().catch(err => console.log(err)).then(() => { doc = newDoc})
    }

    return doc;
}