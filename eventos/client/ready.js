const Discord = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env.Token;
const prefix = process.env.Prefix;

module.exports = {
  name: "ready",
  run: async(client) => {

  const s = client.slashs.map(x => x)

  const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {

		await rest.put(
			Routes.applicationCommands("1261378265923322017"),
			{ body: s },
		);

	} catch (error) {
		console.error(error);
	}
})();

const status = [
    `• byCodeBot Support`,
    `• ver: v2`,
    `• Sponsor: -`,
    `• ${prefix}`
  ]

 setTimeout(function Status() {
  
  const statusr = status[Math.floor(status.length * Math.random())]

  client.user.setPresence({
    status: 'dnd',
    activities: [{
      name: statusr,
      type: 'WATCHING'
    }] 
  })
 }, 600000)

 const statu = status[Math.floor(status.length * Math.random())]

 client.user.setPresence({
    status: 'dnd',
    activities: [{
      name: statu,
      type: 'WATCHING'
    }] 
  })

  }
}
