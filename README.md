
<p align="center">Bot Tutoriales :heart: </p>

# 🌐 Descargar Las Cosas Necesarias

#### **Node v14.17.6**

* **[Click Aqui Para Descargar](https://nodejs.org/dist/v14.17.6/node-v14.17.6-x64.msi)**

#### **Visual Studio Code**

* **[Click Aqui Para Descargar](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)**

#### **💘 Descarga Las Tres Cosas Para Usar El Host De Heroku**

#### **Heroku App**

* **[Click Aqui Para Descargar](https://cli-assets.heroku.com/heroku-x64.exe)**

#### **Visual Studio Code App**

* **[Click Aqui Para Descargar](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)** **| O Solo Darle Click Aqui [Here](https://github.com/Jennifer7w7/Bot-Tutoriales#visual-studio-code)**

#### **Git App**

* **[Click Aqui Para Descargar](https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe)**

```markdown
Esto Es Todo Para El Host De Heroku Para tu Bot | No Sabes Como Hostearlo? Solo Anda A Las Docs De Heroku Darle Click Aqui:
``` 
**[Click Aqui Para Ver Las Docs De Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)** 
```markdown
PD: Muy Pronto Video De Esto OwO
```


# ❗ Requisitos ❗

* [Node.js 14.17.6](https://nodejs.org/en/download/)
* [discord.js@12.5.3](https://www.npmjs.com/package/discord.js/v/12.5.3)

**O Darle Click Aqui [Here](https://github.com/Jennifer7w7/Bot-Tutoriales#descargar-las-cosas-necesarias) Para llevarte A Descargar Mas Rapido Node.Js o tambien visual studio code o si no puedes editar en Replit - Glitch - Heroku PD: Heroku es un host lo puedes editar tu proyecto con Visual Studio Code para eso necesita Git - Heroku App - Node.JS Y Para Descargar Esto Tres Dale Click Aqui [Here](https://github.com/Jennifer7w7/Bot-Tutoriales#descargar-las-cosas-necesarias)**
# Instalación

**Se requiere Node.JS 14.17.6 o más reciente**

**Primero Es El Package que es este uwu:**

# PACKAGE

```json
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

```javascript
Despues de Esto Pones "npm init -y"
y lo ultimo:
```
```javascript
npm install o Dandole Click a "install-packages.bat"
```
**Para Instalar Los Packages!**
# Despues Debes Irte Donde el archivo config.json y Pones esto!

  ```json
  {
    "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
    "prefix": "Tu Prefix"
  }
  ```

# Ejemplos

**npm install discord.js Package Aqui: [**Click Aqui**](https://github.com/Jennifer7w7/Bot-Tutoriales#package)- lo definimos abajo esta para hacer el bot 😅**

# DISCORD.JS

```javascript
const Discord = require('discord.js')
const client = new Client()
const { token, prefix } = require('./config.json')
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

# ⁉ No Sabes Como Copiar Tu Token? Sencillo Aqui Lo Podes Ver uwu:

<div align="left"><img src="/assets/token.gif">

# 👀 Iniciar Proyecto
```javascript
node . o dale click en "start.bat"
```

# 💨 Ejecuta los proyectos

### **Glitch:** 
[![Remix en Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/Jennifer7w7/Bot-Tutoriales)
### **Replit:** 
[![Ejecutarse en Repl.it](/assets/GitHub.PNG)](https://repl.it/github/Jennifer7w7/Bot-Tutoriales)
### **Heroku:** 
[![Desplegar](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Jennifer7w7/Bot-Tutoriales)

# 🔗Links

* [Web De Discord.js](https://discord.js.org/#/)
* [Documentation Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
* [Discord.js Server](https://discord.com/invite/bRCvFy9)
* [Github](https://github.com/Jennifer7w7)
* [Discord Server](https://discord.gg/TvBXwYbW4y)
* [Node.js v16](https://nodejs.org/es/download/current/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Repositorio Bot-Tutoriales V12](https://github.con/Jennifer7w7/Bot-Tutoriales)
* [Mi Server De Discord](https://dsc.gg/ts-community)

### 🔗 Links De La Paginas Para Ejecutar El Proyecto

* [Heroku](https://heroku.com)
* [Replit](https://replit.com)
* [Glitch](https://glitch.com)
* [Logearte En Glitch](https://glitch.com/signup)
* [Logearte En Replit](https://replit.com/login)
* [Logearte En Heroku](https://id.heroku.com/login)
* [Registrate En Glitch](https://glitch.com/signin)
* [Registrate En Replit](https://replit.com/signup)
* [Registrate En Heroku](https://signup.heroku.com)


### 🔗 Links Discord.js:

* [Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Documentation](https://discord.js.org/#/docs/main/master/general/welcome)
* [Guia](https://discordjs.guide/) ([source](https://github.com/discordjs/guide))
* Ver también el [Guía de actualización](https://discordjs.guide/additional-info/changes-in-v13.html), incluidos los elementos Ya  actualizados y eliminados de la biblioteca.
* [Discord.js Discord server](https://discord.gg/djs)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/discordjs/discord.js)
* [NPM](https://www.npmjs.com/package/discord.js)
* [Bibliotecas relacionadas](https://discord.com/developers/docs/topics/community-resources#libraries)

 ### Extensions

* [RPC](https://www.npmjs.com/package/discord-rpc) ([source](https://github.com/discordjs/RPC))
