const {Client, Collection} = require("discord.js");

module.exports = class TuturialBot extends Client {
    constructor(options) {
        super(options)

        this.commands = new Collection(); // Esto Almacenara Sus Comandos
        this.cooldowns = new Collection(); //Esto Almacenara tus Comandos con tiempos de reutilizacion.
        this.alises = new Collection(); // Esto Almacenara sus comandos alternativo. Ejemplo: /server => /serverinfo, /guild, /guildinfo
        this.config = require('../config.json');
        this.package = require('../package.json');
        this.recent = new Set();
    }
}