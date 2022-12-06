const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Replies with pong',
    usage: 'ping',
    aliases: ['p'],
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    run: async (interaction) => {
        await interaction.reply('Pong')
    }
}
