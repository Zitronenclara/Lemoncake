// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')

module.exports = {
	name: 'interactionCreate',
	once: false,
	/**
	 * Triggered when the bot receives a message
	 *
	 * @author: Clara
	 * @param {Discord.Client} client The bot client
     * @param {Discord.CommandInteraction} interaction The received interaction
	 * @since 1.0.0
	 */
	async execute(client, interaction) {
        if (!interaction.isCommand()) return;
        const commandName = interaction.commandName;
        const author = interaction.member.user;

        //let authorData = await botUser.load(client, author.id)
        
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        try {
            if (command.takesTime) {await interaction.deferReply()}
            command.execute(new CommandArgs(client, author, interaction.channel, interaction.options, interaction))
        } catch (error) {
            console.error(error);
            channel.send("An error occured while trying to execute that command.");
        }
	},
};