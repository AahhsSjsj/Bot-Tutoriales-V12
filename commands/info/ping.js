const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ping",
    category: 'info',
    description: "Devuelve latencia y ping API",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Haciendo Ping....`)
        const embed = new MessageEmbed()
        .setTitle('Pong!')
        .setColor('RANDOM')
        .setDescription(`WebSocket Ping en ${client.ws.ping}MS\nMessage Edit es ${Math.floor(msg.createAt - message.createAt)} MS!`)
        await message.channel.send(embed)
        msg.delete()
    }
}