// IMPORTANT IMPORTS
const Discord = require('discord.js')

/**
* Arguments each command receives from the interactionCreate event
* 
* @class
* @constructor
* @public
*/
module.exports = class CommandArgs {
    /**
     * Creates an instace of CommandArgs
     *
     * @since 1.0.0
     * @param {Discord.Client} client The discord bot client
     * @param {Discord.User} author The user object that invoked the command
     * @param {Discord.Channel} channel The channel the command was invoked in
     * @param {ReadonlyArray} options The command options
     * @param {Discord.Interaction} interaction The command interaction
     */
    constructor(client, author, channel, options, interaction){
        /**
         * client
         * 
         * @since 1.0.0
         * @type {Discord.Client}
         * @public
         */
         this.client = client

        /**
         * author
         * 
         * @since 1.0.0
         * @type {Discord.User}
         * @public
         */
         this.author = author

        /**
         * channel
         * 
         * @since 1.0.0
         * @type {Discord.Channel}
         * @public
         */
         this.channel = channel

        /**
         * options
         * 
         * @since 1.0.0
         * @type {ReadonlyArray}
         * @public
         */
         this.options = options

        /**
         * interaction
         * 
         * @since 1.0.0
         * @type {Discord.Interaction}
         * @public
         */
         this.interaction = interaction
    }
}