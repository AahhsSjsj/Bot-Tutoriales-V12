const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ping",
    category: 'info',
    description: "Devuelve latencia y ping API",
    /**
     * 
     * @param {import("../../index.js")} client 
     * @param {import("../../events/message")} Discord 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     * @param {*} param3
    */
    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Haciendo Ping....`)
        const embed = new MessageEmbed()
        .setTitle('Pong!')
        .setColor('RANDOM')
        .setDescription(`WebSocket Ping en ${client.ws.ping}MS\nMessage Edit es ${Math.floor(msg.createdAt - message.createdAt)} MS!`)
        await message.channel.send(embed)
        msg.delete()
    }
}