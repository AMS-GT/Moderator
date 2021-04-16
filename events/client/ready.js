module.exports = client => {
  let botStatus = [
    `${client.guilds.cache.size} servers!`,
    "$help",
    `Under Codding!`,
    `Over ${client.channels.cache.size} channels!`
]

    setInterval(function() {
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "STREAMING",
       url: "https://www.twitch.tv/the_real_ams"
    });
    }, 5000)

    client.user.setUsername('Moderator');
    client.user.setStatus("dnd"); // dnd/idle/invisble/i typo/online
    
  console.log(`Hello ${client.user.username} is now online!`); // consoles logs this when bot is turned on
   
};
