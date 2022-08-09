const { Client, GatewayIntentBits, WebhookClient, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1003553925414264842/m-lttTt0FdkIikIfxM-fLqZCmpjJWdSmlksqqwDhJXixveW9duFHiz3Eg9qyzBW3K098'})

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const embed = new EmbedBuilder()
	.setTitle('Kitten Bot')
	.setColor(0x00FFFF);


    client.once('ready', async () => {
        const channel = client.channels.cache.get(webhookClient.token);
        try {
            const webhooks = await channel.fetchWebhooks();
            const webhook = webhooks.find(wh => wh.token);
    
            if (!webhook) {
                return console.log('No webhook was found that I can use!');
            }
    
            await webhook.send({
                content: 'Webhook test',
                username: 'kitten-bot',
                embeds: [embed],
            });
        } catch (error) {
            console.error('Error trying to send a message: ', error);
        }
    });

client.login(token);
