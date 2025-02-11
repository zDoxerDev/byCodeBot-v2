const { EmbedBuilder } = require("discord.js");
module.exports = {
    name: "ping",
    categoria: "Informacion",
    usage: "ping",
    descripcion: "Manda informacion de que tan rapido responde tu bot",
    run: async (client, message, args) => {
      
    let values = {
        "high": 350,
        "medium": 150,
        "low": 50
    }

    let ping = Date.now() - message.createdTimestamp

    let color;
      if (ping > values.high) {
        color = '🔴'
    } else if (ping > values.medium) {
        color = '🟡'
    } else {
        color = '🟢'
    }

    let colores;
      if (ping > values.high) {
        colores = '#ED4245'
    } else if (ping > values.medium) {
        colores = '#E67E22'
    } else {
        colores = '#57F287'
    }

    let embed = new EmbedBuilder()
    .setColor(colores)
    .setTitle(`${color} \`|\` Mi ping es ${ping}ms\n🛰️ \`|\` Ping DiscordAPI: ${client.ws.ping} ms`)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()
    
    message.reply({embeds: [embed]})

  }
}
