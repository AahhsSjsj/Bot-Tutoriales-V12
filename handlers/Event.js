//Aqui Podemos Agregar algunos eventos en la carpeta  / events por lo que no necesitamos llenar el inde.js\server.js con todos estos eventos

const { readdySync } = require('fs');

module.exports = client => {
    const events = readdySync("./events/");
    for (let event of events) {
        let file = require(`../events/${event}`);
        client.on(event.split(".")[0], (...args) => file(client, ...args));
    }
}