const { Client, GatewayIntentBits, WebhookClient, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1003553925414264842/m-lttTt0FdkIikIfxM-fLqZCmpjJWdSmlksqqwDhJXixveW9duFHiz3Eg9qyzBW3K098'})

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const embed = new EmbedBuilder()
	.setTitle('Kitten Bot')
	.setColor(0x00FFFF);

client.once('ready', async () => {
    try {
        await webhookClient.send({
            content: 'Test',
            username: 'kitten-bot',
            embeds: [embed],
        });
    } catch (error) {
        console.error('Error trying to send a message: ', error);
    }
});

client.login(token);
