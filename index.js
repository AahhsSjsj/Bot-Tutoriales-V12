const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});
const fetch = require('node-fetch')
const SnakeGame = require('snakecord');
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const db = require('quick.db')
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity("Test jsjsj", {type: "PLAYING"});
    console.log(`${client.user.tag}✅ Listo!`)
})
client.on('message', async message => {
    if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return ;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLocaleLowerCase()
  if(cmd.length == 0 ) return;
  let comando = client.commands.get(cmd)
  if(!comando) comando = client.commands.get(client.aliases.get(cmd));
  if(comando) comando.run(client, message, args)
})
client.login(token)