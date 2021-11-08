// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')

// command options
const options = []

module.exports = {
	name: 'ping',
	description: 'Ping!',
    type: 1,
	options: options,
    /**
     * Returns the client latency
     *
     * @author: Clara
     * @param {CommandArgs} data The command data
     * @since 1.0.0
     */
	async execute(data) {
		await data.interaction.reply({ content: 'Pong!', ephemeral: true });
	}
};