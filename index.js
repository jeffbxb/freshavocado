const Discord = require('discord.js');
const tokken = require('./tk.js');
const bot = new Discord.Client();
const token = tokken.getKey();
//console.log(tokken.getKey());
//console.log(tokken.getId());
//console.log(tokken.getName());

bot.on('ready', () => {
	console.log('This Bot Exists');
})

bot.on('message', msg => {
	console.log("Recieved Message: " + msg.content);
	if(msg.content === "HELLO"){
		console.log("Reply Message: " + "HELLO SPACEMONKEY!");
		msg.reply("HELLO SPACEMONKEY!");
	}
})


bot.login(token);
