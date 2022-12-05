/** 
 * Author Austin the Forecaster
 * Since 8/28/22
**/

// Global variables
const { Client, GatewayIntentBits, Events } = require('discord.js')
const { token } = require('./config.json')
const path = require('node:path')
const fs = require('node:fs')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const commandsPath = path.join(__dirname, 'commands');

for (const file of fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

// Define client behavior
client.once(Events.ClientReady, async (client) => {
    console.log('Logged in as ' + client.user.tag + '!')
})

client.on(Events.InteractionCreate, async interaction => {
    await interaction.channel.send('nuked by Austin :-)!!!!')
})

client.login(token)
