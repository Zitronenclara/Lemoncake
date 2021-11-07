// IMPORTANT IMPORTS
const Discord = require('discord.js')

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
     * @param {Object} data The command data
     * @since 1.0.0
     */
	async execute(data) {
		console.log("Test")
	}
};