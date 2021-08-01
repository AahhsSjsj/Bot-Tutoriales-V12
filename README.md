
<p align="center">Bot Tutoriales :heart: </p>

# Instalación

**Se requiere Node.JS 12.0.0 o más reciente**

**Primero Es El Package que es este uwu:**

# PACKAGE

```javascript
{
  "name": "Bot-Tutoriales",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ascii-table": "0.0.9",
    "canvas": "^2.8.0",
    "discord-reply": "^0.1.2",
    "discord.js": "^12.5.3",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "fs": "0.0.1-security",
    "images-scraper": "^6.3.0",
    "node-fetch": "^2.6.1",
    "quick.db": "^7.1.3",
    "snakecord": "^1.0.7"
  }
}


```

```text
Despues de Esto Pones "npm init -y"
y lo ultimo:
```
```javascript
npm install
```
**Para Instalar Los Npms!**
# Despues Debes Irte Donde el archivo config.json y Pones esto!

  ```javascript
  {
    "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
    "prefix": "Tu Prefix"
  }
  ```

#### Ejemplos

**npm install discord.js Package Aqui: [**Click Aqui**](https://github.com/Jennifer7w7/Bot-Tutoriales#package)- lo definimos abajo esta para hacer el bot 😅**

# DISCORD.JS

```javascript
const Discord = require('discord.js')
const client = new Discord.Client();


function presence(){
   client.user.setPresence({
      status: "online",
      game: {
         name: "TEXTO", // Mensaje Para Poner en el Estado!
         type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING Nota: Para El STREAMING Debes Poner Asi:
         //type: "STREAMING",
         //url: "twitch canal!" uwu!
      }
   });
}


client.on("ready", () => {
    console.log("Estoy listo!");
    prensece();
 });
 
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !==0) return;

    const agrs = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = agrs.shift().toLowerCase();

    if(command === 'ping') {

        message.lienReply("Pong")

    }
   }
 
 });
 
 client.login(token);

```

# ⁉ No Sabes Como Copiar Tu Token? Sencillo Aqui Lo Podes Ver uwu:

<div align="left"><img src="/assets/token.gif">

## 💨 Ejecuta los proyectos

**Glitch:** [![Remix en Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/Jennifer7w7/Bot-Tutoriales)
**Repl:** [![Ejecutarse en Repl.it](/assets/GitHub.PNG)](https://repl.it/github/Jennifer7w7/Bot-Tutoriales)
**Heroku:** [![Desplegar](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Jennifer7w7/Bot-Tutoriales)

### 🔗Links

* [Web De Discord.js](https://discord.js.org/#/)
* [Documentation Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
* [Discord.js Server](https://discord.com/invite/bRCvFy9)
* [Github](https://github.com/Jennifer7w7)
* [Discord Server](https://discord.gg/TvBXwYbW4y)
