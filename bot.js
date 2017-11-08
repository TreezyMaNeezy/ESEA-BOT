const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzc3ODc4ODMzOTI5NjUwMTc2.DOTZog.-cmbhB8_iUj02o_8-lNWKuUuDdA);
