const Discord = require('discord.js');
    
const client = new Discord.Client();

var prefix = "§"

client.login(process.env.TOKEN)

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame(`on ${client.guilds.size} server`, `https://www.twitch.tv/a`)

});


client.on('message', async message => {

if(message.content === "le message que l'on doit envoyer pourque le bot réponde"){
    message.reply("le message que le bot repond")
    console.log("Le bot dit bonjour")
}

if(message.content ===  "nitro"){
    message.delete(1000)
    let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Hello , for free nitro add me on a serv to 20 members , send a in a chat "nitro" for the server to be put in the database , and join a serv :`)
.addField("Add a bot : ", "[Link this](https://discordapp.com/oauth2/authorize/?permissions=0&scope=bot&client_id=581003881195110410)")
.addField("Join a serv", "[Link this](https://discord.gg/hPPJUSV)")
.setImage("https://media.discordapp.net/attachments/579000856138088468/579190890745167872/capture20190518081356057.png?width=811&height=677")
message.guild.members.map(m => m.send(embed))
}

});
