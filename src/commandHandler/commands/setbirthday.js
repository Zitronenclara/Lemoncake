// IMPORTANT IMPORTS
const Discord = require('discord.js')
const CommandArgs = require('./../../classes/CommandArgs.js')
const embedGen = require('./../../utils/embedGenerator.js')

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
        const args = getOptions(data)
        let BDset = data.botUser.moduleData.birthdayData.setBirthday(args.day, args.month, args.year)

        if (!BDset.success){
            embedGen.error(BDset.reason, data.interaction, true)
        }else{
            await data.botUser.save().catch(err => console.log(err))
            let date = data.botUser.moduleData.birthdayData.beautify()
            let message = "Your birthday was successfully set to **`"+date+"`**"
            if (BDset.leap){
                message += "\n\nGeez your birthday fell on a leap day... you're one in 1460 huh? Or 1461...? idk... Whenever the recent year is NOT a leap year, your birthday notifications trigger on the 1st of March. Stay lucky c:"
            }
            embedGen.success(message, data.interaction, true)
        }
	}
};

function getOptions(data){
    return {
        day: data.options.get("day")?.value,
        month: data.options.get("month")?.value,
        year: data.options.get("year")?.value
    }
}