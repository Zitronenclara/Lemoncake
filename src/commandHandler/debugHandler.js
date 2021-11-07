// IMPORTANT IMPORTS
const Discord = require('discord.js')
const fs = require('fs')

// OTHER VARIABLES
const commandFiles = fs.readdirSync('./src/commandHandler/debug').filter(file => file.endsWith('.js'));

/**
 * Tries to execute the given debug command
 *
 * @author: Clara
 * @param {String} name The command name
 * @param {Array} args The command arguments
 * @param {Discord.Message} message Message object that executed the command
 * @since 1.0.0
 */
module.exports = function (name, args, message){
    if (commandFiles.includes(name+".js")){
        const command = require('./debug/'+name+".js")
        command(args, message)
    }else{
        //error embed WIP
    }
}