## Bot Tutoriales ♥💗

# Instalación

**Se requiere Node.JS 12.0.0 o más reciente**

**Primero Es El Package que es este uwu:**

# PACKAGE

```json
{
  "name": "Bot-Tutoriales-V12",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ascii-table": "0.0.9",
    "canvas": "^2.8.0",
    "discord-buttons": "^4.0.0",
    "discord-reply": "^0.1.2",
    "discord.js": "^12.5.3",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "fs": "0.0.1-security",
    "images-scraper": "^6.3.0",
    "megadb": "^3.4.0",
    "node-fetch": "^2.6.1",
    "quick.db": "^7.1.3",
    "snakecord": "^1.0.7",
    "sourcebin": "^4.2.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}


```

```text
Despues de Esto Pones npm init -y

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
const client = new Client()
const { token, prefix } = require('./config.json') // Tener El Archivo config.json dentro del archivo deben Poner: 
//{
//  "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
// "prefix": "Tu Prefix"
//}
//PD: deben quitar dentro del archivo los "//" solo lo otro ⚠
const lineReply = require('discord-reply')


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

        message.lineReply("Pong")

    }
   }
 
 });
 
 client.login(token); //No Hacer C&P(Copy and Paste) por que esto puede tener errores ❌

```
Mas Informacion Aqui:

**https://github.com/AahhsSjsj/Bot-Tutoriales-V12#-no-sabes-como-copiar-tu-token-y-poner-tu-prefix-para-tu-bot-sencillo-aqui-lo-podes-ver-uwu**
