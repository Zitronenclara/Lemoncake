// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')
const embedGen = require('./../../utils/embedGenerator.js')

// command options
const options = []

module.exports = {
	name: 'ping',
	description: 'Ping!',
    type: 1,
	options: options,
    takesTime: false,
    takesTimeUpdate: false,
    usesDB: false,
    loadMentionedUser: {load: false, index: ""},
    /**
     * ping - command
     *
     * @author: Clara
     * @param {CommandArgs} data The command data
     * @since 1.0.0
     */
	async execute(data) {
        embedGen.custom("📡 PONG 📡", "0xFF964F", "Bot Latency: **`"+data.client.ws.ping+"ms`**", data.interaction, true)
	}
};