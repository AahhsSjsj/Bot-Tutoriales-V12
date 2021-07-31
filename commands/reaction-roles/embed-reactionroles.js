const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const lineReply = require('discord-reply')

module.exports = {
    name: "embed-reactionroles",
    aliases: ["err"],
    run: async(client, message, args) => {
    
        const embed = new MessageEmbed()
            .setTitle('Reaction Roles!')
            .setDescription('**Reacciona A Una Reaccion Para Obtener Un Role OwO**')
            .addFields(
                { name: '1️⃣', value: 'Obtener Rol Among Us', inline: true },
                { name: '2️⃣', value: "Obtener El Rol Guapo", inline: true }
            )
            .setColor('RANDOM')

            const msg = await message.lineReply(embed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')

    }
}