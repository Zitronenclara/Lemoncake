// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')
const embedGen = require('./../../utils/embedGenerator.js')

// command options
const options = [
    {
        "name": "user",
        "description": "The user",
        "type": 6,
        "required": false
    }
]

module.exports = {
	name: 'birthday',
	description: 'To see your birthday information or to look up others birthday.',
    type: 1,
	options: options,
    takesTime: false,
    takesTimeUpdate: false,
    usesDB: true,
    loadMentionedUser: {load: true, index: "user"},
    /**
     * birthday - command
     *
     * @author: Clara
     * @param {CommandArgs} data The command data
     * @since 1.0.0
     */
	async execute(data) {
        const args = getOptions(data)
        
        let bd;
        let target;
        if (!args.target){
            bd = data.botUser.moduleData.birthdayData
            target = data.author
        }else{
            bd = data.botUserTarget.moduleData.birthdayData
            target = args.target
        }

        let age;
        if (bd.private){
            age = "**`Birth year is set to private or wasn't added in the first place.`**"
        }else{
            age = "**`"+bd.age()+"`**"
        }

        const embed = new Discord.MessageEmbed()
            .setAuthor(target.username+"#"+target.discriminator, target.displayAvatarURL())
            .setTitle("**BIRTHDAY INFO**")
            .setColor("0xF1FC6F")
            .addFields(
                {name: "birthdate", value: "**`"+bd.beautify()+"`**"},
                {name: "age", value: age}
            );
        data.interaction.reply({embeds: [embed], ephemeral: true})
	}
};

function getOptions(data){
    return {
        target: data.options.getUser("user")
    }
}