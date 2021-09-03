const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const lineReply = require('discord-reply')
const db = require('megadb')
const automod = new db.crearDB({carpeta: 'Base-Datos', sub: 'moderacion', nombre: 'automod'})
const soucebin = require('sourcebin')
const disbut = require('discord-buttons')

module.exports = {
    name: "automod",
    aliases: ["badwords"],
    description: "Activa el automod en tu servidor!",
    /**
     * 
     * @param {import("../../index.js")} client 
     * @param {import("../../events/message")} Discord 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     * @param {*} param3
     */
    run: async(client, message, args) => {
    
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No Tienes Permisos para usar este comando!')
    const tipo = args[0]
    let tiposs = ['on', 'off', 'word']
    if(!tiposs.some(tp => tipo == tp))return message.channel.send('Debes Elegir un tipo valido!')

    if(tipo === 'on'){
        if(automod.has(message.guild.id))return message.channel.send('Este Server Ya Tiene El Automod Activo ....')

        automod.set(`${message.guild.id}.words.idiota`, `true`)
        automod.set(`${message.guild.id}.words.test`, `true`)
        automod.set(`${message.guild.id}.words.puto`, `true`)
        automod.set(`${message.guild.id}.words.testing`, `true`)

        message.channel.send('El Automod Ya Esta Activo!')
    }
    if(tipo === 'off'){
        if(!automod.has(message.guild.id))return message.channel.send('EL Automod no esta Activado!')
        automod.delete(message.guild.id)
        message.reply('El Automod fue quitado')
    }
    if(tipo === 'word'){
        const subtipo = args[1]
        let tiposs = ['list', 'add', 'remove']
        if(!tiposs.some(sb => sb == subtipo))return message.channel.send('Ese Valor no es valido...')
        if(subtipo === 'list'){
            const palabras = await automod.map(`${message.guild.id}.words`, (w, t) => `${t}`).then(palabra => {
                const embed = new Discord.MessageEmbed()
                .setTitle(`Lista de palabras del server ${message.guild.name}`)
                .setDescription(`**• ${palabra.join('\n**• **')}**`)
                .setColor('RANDOM')
                .setThumbnail(message.guild.iconURL())

                //Ahora vamos a subir las palabras al sourcebin
                soucebin.create(
                    [
                        {
                            content: `• ${palabra.join('\n• ')}`,
                            language: 'Markdown'
                        }
                    ],
                    {
                        title: 'Automod.md',
                        description: `Palabras del Automod del server ${message.guild.name}`
                    },
                ).then((value) => {
                    let url2 = new disbut.MessageButton()
                    .setLabel('Ver En La Web')
                    .setStyle('url')
                    .setURL(`${value.url}`)

                    message.channel.send(embed, url2)
                })
            })
        }
        if(subtipo === 'add'){
            if(!automod.has(message.guild.id))return message.channel.send('EL Automod no esta Activado!')
            const palabra = args.slice(2).join(' ')
            if(!palabra)return message.channel.send('No puedes añadir una palabra vacio al automod')
            if(automod.has(`${message.guild.id}.words.${palabra}`))return message.lineReply('Esa palabra ya esta añadida')
            automod.set(`${message.guild.id}.words.${palabra}`, `true`)
            message.channel.send(`Se Ha Añadido la palabra ${palabra} al automod!`)
        }
        if(subtipo === 'remove'){
            if(!automod.has(message.guild.id))return message.channel.send('EL Automod no esta Activado!')
            const palabra = args.slice(2).join(' ')
            if(!palabra)return message.channel.send('No puedes remover una palabra vacio al automod')
            if(!automod.has(`${message.guild.id}.words.${palabra}`))return message.lineReply('Esa palabra no esta en la lista del automod')
            automod.delete(`${message.guild.id}.words.${palabra}`, `true`)
            message.channel.send(`Se Ha Elminado la palabra ${palabra} del automod!`)
        } //Ahora veremos para que borre el mensaje cuando pones esa palabra :)
    }
    }
}