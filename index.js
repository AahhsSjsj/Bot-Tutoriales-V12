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

  if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
      const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
      await db.delete(`afk-${message.author.id}+${message.guild.id}`)
      message.reply(`Su Estado De Afk Ha Sido Removido\nRazon Del Afk: ${info}`)
  }
  //checkea las menciones
  if(message.mentions.members.first()) {
      if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)){
          message.channel.send(message.mentions.members.first().user.tag + ":" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
      }else return;
  }else;
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLocaleLowerCase()
  if(cmd.length == 0 ) return;
  let comando = client.commands.get(cmd)
  if(!comando) comando = client.commands.get(client.aliases.get(cmd));
  if(comando) comando.run(client, message, args)
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === 'MESSAGE ID'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE ID ')
            user.send('Testing !')
        }
    }
    if(reaction.message.id === 'MESSAGE ID'){
    if(reaction.emoji.name === '2️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE ID')
        user.send('Testing !')
        }
    }
})

client.on('messageReactionRemove', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === 'MESSAGE ID'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE ID')
            user.send('Testing !')
        }
    }
    if(reaction.message.id === 'MESSAGE ID'){
    if(reaction.emoji.name === '2️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE ID')
        user.send('Testing !')
        }
    }
})

client.login(token)