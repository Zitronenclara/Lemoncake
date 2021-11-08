// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')

// command options
const options = [
    {
        "name": "day",
        "description": "Your birth day",
        "type": 4,
        "required": true
    },
    {
        "name": "month",
        "description": "Your birth month",
        "type": 4,
        "required": true
    },
    {
        "name": "year",
        "description": "Your birth year",
        "type": 4,
        "required": false
    }
]

module.exports = {
	name: 'setbirthday',
	description: 'To set your birthday. NOTE: YOU CAN ONLY SET YOUR BIRTHDAY ONCE!',
    type: 1,
	options: options,
    takesTime: false,
    /**
     * setBirthday
     *
     * @author: Clara
     * @param {CommandArgs} data The command data
     * @since 1.0.0
     */
	async execute(data) {
        
	}
};