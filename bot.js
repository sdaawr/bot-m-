const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594491787842945055")
setInterval(function() {
channel.send(`I Need credits Hh bm hhbm hhbm hhbm cretors by devil I Need credits Hh bm hhbm hhbm hhbm cretors by devil`);
}, 30)
})

client.login(process.env.BOT_TOKEN);