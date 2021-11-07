// IMPORTANT IMPORTS
const Discord = require('discord.js');
const config = require('./config.json');

// OTHER IMPORTS
const commandHandler = require("./src/commandHandler/commandHandler.js")
const eventHandler = require("./src/eventHandler/eventHandler.js")
const DB = require("./src/database/db.js")

// VARIABLES
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

/* STARTUP */

// init commands
commandHandler(client)

// register events
eventHandler(client)

// connect to database
DB.connect()

// client login
client.login(config.token)