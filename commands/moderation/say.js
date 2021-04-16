const Discord = require("discord.js");

module.exports = {
    name: "say",
    category: "moderation",
    run: async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`You Don't have **Permission** to use this Command`)
    }
    if (args.length > 0) {
        message.channel.send(args.join(" ")).then((msg) => {
            message.delete();
        });

    } else {
        let help = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setTitle('❌')
            .setDescription('$say [message]');
        message.channel.send(help).then((value) => {
            message.delete(10000);
            value.delete(10000);
            });
        }
    }
}