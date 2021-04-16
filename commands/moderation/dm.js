const Discord = require("discord.js")
const prefix = require("../../botconfig.json");

module.exports = {
    name: "dm",
    category: "moderation",
    run: async (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Add a User');
    if (message.channel.type == "dm") return message.channel.send("This command only works in a server!");
    message.delete().catch(O_o=>{});
    let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    const dmtosend = args.slice(1).join(" ")
    user.send(dmtosend);
    
    message.reply("Message sent by " + message.author.tag)
  let sendembed = new Discord.RichEmbed()
  .setDescription(`Send Dm command executed by ${message.author}`)
  .setColor("#000000")
  .addField("Message Sent To", user.user.tag) 
  .addField("Used In", message.channel)
  .setTimestamp();
    }
}