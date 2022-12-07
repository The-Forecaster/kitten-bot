/** 
 * Author Austin the Forecaster
 * Since 8/28/22
**/

// Global variables
const { Client, GatewayIntentBits, Events } = require('discord.js')
const { token } = require('./config.json')
// const path = require('node:path')
// const fs = require('node:fs')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// const commandsPath = path.join(__dirname, 'commands');

// Define client behavior
client.once(Events.ClientReady, async client => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.login(token)
