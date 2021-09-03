//requirimos el package :)
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const lineReply = require('discord-reply')

module.exports = {
    name: "afk",
    /**
     * 
     * @param {import("../../index.js")} client 
     * @param {import("../../events/message")} Discord 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     * @param {*} param3
     */
    run: async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`**Usted ha sido Establecido en afk\n Razon Del Afk: \`${content}\`**`)
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.lineReply(embed)
    }
}