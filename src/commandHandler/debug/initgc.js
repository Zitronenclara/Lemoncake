// IMPORTANT IMPORTS
const Discord = require('discord.js')
const config = require('./../../../config.json')

/**
 * Initializes the given command as a guild slash command
 *
 * @author: Clara
 * @param {String[]} args The command arguments  
 * @param {Discord.Message} message Message object that executed the command
 * @since 1.0.0
 */
module.exports = async function (args, message){
    const command = require('./../commands/'+args[0]+".js")
    message.member.guild.commands.create({name: command.name, description: command.description, options: command.options, type: command.type})
    console.log(command.name+" GUILD command init")
}