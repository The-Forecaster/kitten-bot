/** 
 * Author Austin the Forecaster
 * Since 8/28/22
 */

// Global variables
const { Client, GatewayIntentBits, Events, SlashCommandBuilder } = require('discord.js')
const { token } = require('./config.json')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Define Slash commands here
module.exports = {
    data: 
    new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong')
    }
}

// Run commands
client.once(Events.ClientReady, async (client) => {
    console.log('Logged in as ' + client.user.tag + '!')
})

client.login(token)
