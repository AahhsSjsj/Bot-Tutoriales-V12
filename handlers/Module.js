const {Collection} = require("discord.js"), {readdir} = require("fs"), homePath = process.cwd();

module.exports = client => {
  client.commands = new Collection();
  client.aliases = new Collection();
  client.helps = new Collection();

  readdir(`${homePath}/comandos/`, (err, categories) => {
    if (err) console.log(err);
    console.log(`[available] ${categories.length} category`);
    categories.forEach(category => {
      let moduleConf = require(`${homePath}/comandos/${category}/module.json`);
      if (moduleConf) {
        moduleConf.path = `${homePath}/comandos/${category}`;
        moduleConf.cmds = [];
        client.helps.set(category, moduleConf);
        readdir(`${homePath}/comandos/${category}`, (err, files) => {
          console.log(`[available] ${files.length - 1} cmds - ${category} category`);
          if (err) console.log(err);
          // let commands = new Array();
          files.forEach(file => {
            if (file.endsWith(".js")) {
              let prop = require(`${homePath}/comandos/${category}/${file}`);
              // let cmdName = file.split(".")[0];
              client.commands.set(prop.help.name, prop);
              prop.conf.aliases.forEach(alias => client.aliases.set(alias, prop.help.name));
              client.helps.get(category).cmds.push(prop.help.name);
            };
          });
        });
      };
    });
  });
};