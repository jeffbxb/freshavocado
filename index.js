const Discord = require("discord.js");
const config = require("./tk.js");
//const config = require("./config.json");
const bot = new Discord.Client();
const token = config.getKey();
//console.log(tokken.getKey());
//console.log(tokken.getId());
//console.log(tokken.getName());
console.log("the current prefix is " + config.getPrefix());

bot.on("ready", () => {
  console.log("This Bot Exists");
});

bot.on("message", (msg) => {
  console.log("Recieved Message: " + msg.content);
  if (msg.content === "HELLO") {
    console.log("Reply Message: " + "HELLO SPACEMONKEY!");
    msg.reply("HELLO SPACEMONKEY!");
  }
});

bot.login(token);
