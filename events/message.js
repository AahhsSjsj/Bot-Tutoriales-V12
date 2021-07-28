const Discord = require("discord.js"), cooldowns = new Discord.Collection(), db = require("quick.db");
// Los tiempos de reutilización almacenarán al usuario cuando aún se encuentren en el modo de reutilización.
module.exports = async (client, message) => {
  //Evite cualquier charla con otros bots o solo.
  if (message.author.bot || message.author === client.user) return;
  
  // Elimine esto si desea que el bot pueda ejecutar un comando dentro de los DM.
  if (message.channel.type === "dm") return;
  
  let prefix = client.config.prefix; // Su prefijo en config.json
  // Si el usuario no le hace nada al bot, devuélvalo.
  if (!message.content.startsWith(prefix)) return;
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  let sender = message.author;
  
  // Ya hemos visto a un niño que tiene un message.flags o llamarían, parameter things.
  message.flags = []
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1)); // Ejemplo: /play -soundcloud UP pics
  }
  
  let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!commandFile) return; // Si los comandos no existen, ignórelos. No envíe ninguna advertencia sobre esto.
  
  // Esto establecerá un tiempo de reutilización para un usuario después de escribir un comando.
  if (!cooldowns.has(commandFile.help.name)) cooldowns.set(commandFile.help.name, new Discord.Collection());
  
  const member = message.member,
        now = Date.now(),
        timestamps = cooldowns.get(commandFile.help.name),
        cooldownAmount = (commandFile.conf.cooldown || 3) * 1000;
  
  if (!timestamps.has(member.id)) {
    if (!client.config.owners.includes(message.author.id)) {
      // Si el usuario no era usted u otros propietarios almacenados en config.json
      timestamps.set(member.id, now);
    }
  } else {
    const expirationTime = timestamps.get(member.id) + cooldownAmount;
    
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(`Cálmate amigo, espera **${timeLeft.toFixed(1)}** segundos para volver a intentar el comando.`);
    }
    
    timestamps.set(member.id, now);
    setTimeout(() => timestamps.delete(member.id), cooldownAmount); // Esto eliminará el tiempo de reutilización del usuario por sí solo.
  }
  
  try {
    if (!commandFile) return;
    commandFile.run(client, message, args);
  } catch (error) {
    console.log(error.message);
  } finally {
    // Si quieres saber realmente quién está escribiendo o usando tu bot en este momento.
    console.log(`${sender.tag} (${sender.id}) ejecutó un comando: ${cmd}`);
  }
}