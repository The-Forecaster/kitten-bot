const { Client, GatewayIntentBits, WebhookClient, EmbedBuilder } = require('discord.js');
const { token, webhook } = require('./config.json');
const webhookClient = new WebhookClient({ url: webhook })

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const embed = new EmbedBuilder()
	.setTitle('Kitten Bot')
	.setColor(0x00FFFF);


    client.once('ready', async () => {
        const channel = client.channels.cache.get(webhookClient.token);
        try {
            const webhook = channel.fetchWebhooks().find(wh => wh.token);
    
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
