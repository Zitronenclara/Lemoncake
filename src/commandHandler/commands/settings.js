// IMPORTANT IMPORTS
const Discord = require('discord.js');
const CommandArgs = require('./../../classes/CommandArgs.js')
const embedGen = require('./../../utils/embedGenerator.js')

// command options
const options = [

]

module.exports = {
	name: 'settings',
	description: 'Several personal user settings',
    type: 1,
	options: options,
    takesTime: false,
    takesTimeUpdate: false,
    usesDB: true,
    loadMentionedUser: {load: false, index: ""},
    /**
     * settings - command
     *
     * @author: Clara
     * @param {CommandArgs} data The command data
     * @since 1.0.0
     */
	async execute(data) {
        const args = getOptions(data)
        if (!data.botUser.moduleData.birthdayData.set){
            return embedGen.error("You haven't set your birthday yet. Try `/setbirthday` if you want to set it.", data.interaction, true)
        }

        const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('settings')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);
        data.interaction.reply({ content: 'Pong!', components: [row], ephemeral: true});
	},
    /**
     * settings - update
     *
     * @author: Clara
     * @param {CommandArgs} data The update data
     * @since 1.0.0
     */
    async update(data) {
        console.log(data.interaction.values)
    }
};

function getOptions(data){
    return {

    }
}