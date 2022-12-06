/** 
 * Author Austin the Forecaster
 * Since 8/28/22
**/

// Global variables
const { Client, GatewayIntentBits, Events } = require('discord.js')
const { token } = require('./config.json')
const path = require('node:path')
const fs = require('node:fs')
const { aliases } = require('./commands/ping')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const commandsPath = path.join(__dirname, 'commands');

for (const file of fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))) {
	const command = require(path.join(commandsPath, file));
	if ('name' in command && 'run' in command) {
        // Register the command with the correct name and its aliases, if present
		client.commands.set(command.name, command);

        if ('aliases' in command) {
            for (const alias in command.aliases) {
                client.commands.set(alias, command)
            }
        }
	} else {
		console.log(`[WARNING] The command at ${file} is missing a required "data" or "execute" property.`);
	}
}

// Define client behavior
client.once(Events.ClientReady, async client => {
    console.log(`Logged in as ${client.user.tag}!`)

    client.channels.cache.forEach(async (_name, channel) => channel.send('Logged in!'))
}).on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand() || interaction.user == client.user) return

    const command = interaction.client.commands.get(interaction.commandName)

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`)
		return
	}

	try {
		await command.run(interaction)
	} catch (error) {
		console.error(error)
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
})

client.login(token)
