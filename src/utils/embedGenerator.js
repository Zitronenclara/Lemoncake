//IMORTANT IMPORTS
const Discord = require('discord.js')

/**
 * Sends a simple Discord.MessageEmbed for error messages.
 * If no client or interaction is specified then the embed will just be returned.
 *
 * @param {string} message Error message
 * @param {Discord.Client} client Discord client
 * @param {object} interaction Interaction that this embed will be send as an response to
 * @param {Boolean} invisible If the interaction reply is invisible to other users except the author
 * 
 */
module.exports.error = function (message, interaction, invisible) {
    const embed = new Discord.MessageEmbed()
        .setAuthor("⚠️ ERROR ⚠️")
        .setColor("0xF52411")
        .setTimestamp()
        .setDescription(message);
    if (!interaction) {
        return embed
    } else {
        interaction.reply({embeds: [embed], ephemeral: invisible})
    }
}

/**
 * Sends a simple custom Discord.MessageEmbed.
 * If no client or interaction is specified then the embed will just be returned.
 * 
 * @param {string} title Embed title
 * @param {string} color Embed color (0xFFFFFF)
 * @param {string} message Embed message
 * @param {Discord.Client} client Discord client
 * @param {object} interaction Interaction that this embed will be send as an response to
 * @param {Boolean} invisible If the interaction reply is invisible to other users except the author
 * 
 */
module.exports.custom = function (title, color, message, interaction, invisible) {
    const embed = new Discord.MessageEmbed()
        .setAuthor(title)
        .setColor(color)
        .setTimestamp()
        .setDescription(message);
    if (!interaction) {
        return embed
    } else {
        interaction.reply({embeds: [embed], ephemeral: invisible})
    }
}