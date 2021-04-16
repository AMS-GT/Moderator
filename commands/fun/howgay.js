const discord = require('discord.js');

module.exports = {
    name: "howgay",
    category: "fun",
    run: async (bot, message, args) => {
        if (message.length < 1) return message.reply('Add a User');
        let target = message.guild.member(message.mentions.users.first());
        message.delete();
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
    
        if(!target) message.channel.send( message.author.username + " is " + between(0, 100) + '% gay :rainbow_flag:')
        else { message.channel.send(`<@${target.id}>` + ' is ' + between(0, 100) + '% gay :rainbow_flag:'); }
    }

};