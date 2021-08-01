const { MessageEmbed, MessageAttachment } = require('discord.js')
const Discord = require('discord.js')
const lineReply = require('discord-reply')

module.exports = {
    name: "embed",
    aliases: [""],
    description: "Embed :D",
    usage: "",
    run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
            .setAuthor('Esto Es Author :D') //Pone En EL Embed en lo primero que seria author :) :D
            .setTitle('Esto Es Un Title :D') //Pone Abajo Del Author para poner un link en el title solo pones .setURL('URL')
            .setDescription('Esto Es Una Description :D') // Pone Un Texto Sencillo Como Este Es Un Texto Normal iguallo que escribes :D
            .setFooter('Esto Es Un Footer :D', message.author.avatarURL())// Pone En Lo Ultimo Lo Puedes Poner Con un avatar a lado Poniendo igual que author :D
            .setTimestamp() //Pone La Hora Actual en el embed a lado del Footer :D 
            .setColor('RANDOM') //Esto Pone COlor Al Embed lo pones en letras pero En Ingles Ejemplo: .addColor('RED') y Grandes o mayuculas para que salag tambien pueden con el codigo del color pero sin los '' Ejemplo .addColor(ffffff) Ahi :)
            .setImage('https://media.discordapp.net/attachments/869640143114498048/871289667847348294/955_big.png') // Una Imagen que sale si lo pones una url de imagen valida si quieres La Imagen Como Lo Haces TU Usas un Attachement esto xD
            .setURL('https://youtube.com') // Lo Que Dije Del Title :D
            .setThumbnail('https://media.discordapp.net/attachments/869640143114498048/871289667847348294/955_big.png') // Una Imagen Chiquita pero a lado pero arriba del Embed :)
            .addField('Name', 'Value', true) // Field Es Esto Ejemplos
            .addFields(
                { name: "Name", value: "Value", inline: true},
                { name: "Name", value: "Value", inline: true} // Dos Field :D
            )//Las Opciones Del Embed :D Ahora Lo Ponemos para que vean como es :D

        
        
        message.channel.send(embed) //Enviamos El Attachment y El Embed :D
    }
}