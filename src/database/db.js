// IMPORTANT IMPORTS
const mongoose = require('mongoose')
const botConfig = require('./../../config.json')
const hash = require('object-hash')
const mDH = require('./../modules/moduleDataHandler.js')

// IMPORTED MODELS
const User = require('./models/user.js')

const config = {
    version: 1
}

module.exports.connect = function (){
    mongoose.connect(botConfig.DBurl, {
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
            userid: id,
            version: config.version,
            moduleData: mDH.loadData()
        });
        await newDoc.save().catch(err => console.log(err)).then(() => { doc = newDoc})
    }

    doc.moduleData = mDH.loadData(doc.moduleData)
    doc.markModified("moduleData")
    return doc;
}