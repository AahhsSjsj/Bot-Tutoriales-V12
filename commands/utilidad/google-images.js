const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const lineReply = require('discord-reply')
const img = require('images-scraper')
const google = new img({
    puppeteer: {
        handless: true,
    }
})

module.exports = {
    name: "image",
    aliases: [""],
    description: "Envia Una Imagen De Google :D",
    usage: "texto",
    /**
     * 
     * @param {import("../../index.js")} client 
     * @param {import("../../events/message")} Discord 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     * @param {*} param3
     */
    run: async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.lineReply('Por Favor Pon Una Busqueda :D')

        var random = Math.floor((Math.random() * 90) + 0);
        console.log(random)
        const resutls = await google.scrape(query, 100)
        const hasil = resutls[random].url
        message.lineReply(`Generando Imagen....`)
        let embedpic = new Discord.MessageEmbed()
        .setTitle(`Imagen Generada COn Exito OwO`)
        .setImage(hasil)
        .setColor('RANDOM')

        message.channel.startTyping()

        setTimeout(() => {
            message.lineReply(embedpic)
            message.channel.stopTyping()
        }, 6000)
    }
} //Volvemos en cuanto se instale images-scraper xD