// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')
const DB = require('./../../database/db.js')

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
        if (interaction.isCommand() || interaction.isSelectMenu()){
            let commandName = interaction.commandName;
            if (!commandName) commandName = interaction.customId;
            const author = interaction.member.user;
            let botUser;
            let botUserTarget;
            const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            if (interaction.isCommand()){
                try {
                    if (command.takesTime) {await interaction.deferReply({ephemeral: true})};
                    if (command.usesDB) {botUser = await DB.loadBotUser(author.id)};
                    if (command.loadMentionedUser.load) {botUserTarget = await DB.loadBotUser(interaction.options.getUser(command.loadMentionedUser.index)?.id)};
                    command.execute(new CommandArgs(client, author, botUser, interaction.channel, interaction.options, interaction, botUserTarget))
                } catch (error) {
                    console.error(error);
                    channel.send("An error occured while trying to execute that command.");
                }
            }else{
                try {
                    if (command.takesTimeUpdate) {await interaction.deferReply({ephemeral: true})};
                    if (command.usesDB) {botUser = await DB.loadBotUser(author.id)};
                    command.update(new CommandArgs(client, author, botUser, interaction.channel, interaction.options, interaction, botUserTarget))
                } catch (error) {
                    console.error(error);
                    channel.send("An error occured while trying to execute that selection.");
                }
            }
            
        };
	},
};