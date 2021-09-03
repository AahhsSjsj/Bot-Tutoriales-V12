const { MessageEmbed } = require("discord.js");
const lineReply = require('discord-reply')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
    name: "help",
    aliases : ['h'],
    description: "Muestra todos los comandos de bot disponibles.",
    /**
     * 
     * @param {import("../../index.js")} client 
     * @param {import("../../events/message")} Discord 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     * @param {*} param3
    */
    run: async (client, message, args) => {
  
  
      const color =
        message.guild.me.displayHexColor === "#000000"
          ? "#ffffff"
          : message.guild.me.displayHexColor;
  
      if (!args[0]) {
        let categories = [];
  
        readdirSync("./commands/").forEach((dir) => {
          const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
            file.endsWith(".js")
          );
  
          const cmds = commands.map((command) => {
            let file = require(`../../commands/${dir}/${command}`);
  
            if (!file.name) return "Sin nombre de comando.";
  
            let name = file.name.replace(".js", "");
  
            return `\`${name}\``;
          });
  
          let data = new Object();
  
          data = {
            name: dir.toUpperCase(),
            value: cmds.length === 0 ? "En curso." : cmds.join(" "),
          };
  
          categories.push(data);
        });
  
        const embed = new MessageEmbed()
          .setTitle("📚 ¿Necesitas ayuda? Aquí están todos mis comandos:")
          .addFields(categories)
          .setDescription(
            `Use \`${prefix}help\` seguido de un nombre de comando para obtener más información adicional sobre un comando. Por ejemplo: \`${prefix}help ban\`.`
          )
          .setFooter(
            `Solicitado por ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor(color);
        return message.lineReply(embed);
      } else {
        const command =
          client.commands.get(args[0].toLowerCase()) ||
          client.commands.find(
            (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
          );
  
        if (!command) {
          const embed = new MessageEmbed()
            .setTitle(`¡Comando inválido! Usar \`${prefix}help\` por todos mis comandos!`)
            .setColor("FF0000");
          return message.lineReply(embed);
        }
  
        const embed = new MessageEmbed()
          .setTitle("Detalles del comando:")
          .addField("PREFIX:", `\`${prefix}\``)
          .addField(
            "COMANDO:",
            command.name ? `\`${command.name}\`` : "Sin nombre para este comando."
          )
          .addField(
            "ALIASES:",
            command.aliases
              ? `\`${command.aliases.join("` `")}\``
              : "No hay alias para este comando."
          )
          .addField(
            "USAGE:",
            command.usage
              ? `\`${prefix}${command.name} ${command.usage}\``
              : `\`${prefix}${command.name}\``
          )
          .addField(
            "DESCRIPTION:",
            command.description
              ? command.description
              : "Sin descripción para este comando."
          )
          .setFooter(
            `Solicitado por ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor(color);
        return message.lineReply(embed);
      }
    },
  };