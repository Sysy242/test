const Discord = require('discord.js');
    
const client = new Discord.Client();

var prefix = "§"

client.login(process.env.TOKEN) 

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame(`on ${client.guilds.size} server`)

});


client.on('message', async message => {

if(message.content === "le message que l'on doit envoyer pourque le bot réponde"){
    message.reply("le message que le bot repond")
    console.log("Le bot dit bonjour")
}

if(message.content ===  "pfr"){
    message.delete(1000)
    let embed = new Discord.RichEmbed() 
.setColor('RANDOM')
.setTitle(`THIS SERV IS FR :flag_fr: !!!`)
.addField("Salut , si tu vois se message , je suis content car tu peut rejoin 🥂𝓛𝓮 𝓒𝓸𝓲𝓷 , laisse moi te le présente", "mais pas aussis bien que si tu rejoin , car tu feras ton propre avis D:")
.addField("Un serveur avec des rewards !!", "Mais pas abusér ni fake :joy:")
.addField("Plein de salon avec des évents régulier", "Si il y a de plus en plus de membres , a toi de voir D:")
.addField("Le recrutement de staff ouvert", "Car bah il nous faus une équipe")
.addField("Partenariat ON", "Alors si tu veut un partenariat , contacte 𝓩𝓮𝓴𝓒𝓷𝓸𝔀#4788")
.addField("Alors c'est le moment de rejoindre : https://discord.gg/yAXs3rz", "Nan mais ta crus que j'alais pas metre d'invites ???")

message.guild.members.map(r => r.send(embed))   
}
    
    if(message.content ===  "p"){
    message.delete(1000)
message.guild.members.map(r => r.send("Whi ??? 100 members = nitro rewards no fake , and reward , go join and add this bot for other members of nitro reward : https://discordapp.com/oauth2/authorize?client_id=583250491308376085&scope=bot&permissions=2086141183"))   
}

});
