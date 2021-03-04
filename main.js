const Discord = require('discord.js');
const fs = require('fs');


let token = 'YOUR TOKEN HERE'

const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();

const prefix = 'd!'


// invite link: https://discord.com/oauth2/authorize?client_id=804791209096380466&scope=bot&permissions=8
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

    console.log(command)
}

client.once('ready', () => {

let onlinePD;
let onlineEMS;

let activeMessage = new Discord.MessageEmbed()
.setTitle('CURRENT ACTIVE USERS')
.setDescription(`**ONLINE POLICE** \n${onlinePD}\n\n **ONLINE EMS**\n${onlineEMS}`)
.setColor('RED')

client.channels.fetch('816497499980038175').then(channel =>
    channel.send(activeMessage)
   
)

let id = activeMessage.id;

console.log('Dispatch bot is online.')

client.user.setPresence({ activty: {name: 'People being dispatched', type: 'WATCHING'}, status: 'online'})
.then(console.log)
    .catch(console.error)


client.on('message', async message => {


if(!message.content.startsWith(prefix) || message.author.bot ) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift(). toLowerCase(); 








if(command === 'ping'){
    message.channel.send(new Discord.MessageEmbed().setTitle("Pinging...")
    .setDescription("Please wait.")).then(pingMessage => {
        var ping = pingMessage.createdTimestamp - message.createdTimestamp;

        pingMessage.edit(new Discord.MessageEmbed().setTitle("Latency :ping_pong:")
            .setDescription(`Bot: ${ping} ms\nAPI: ${client.ws.ping} ms`))
        .then
    });
    

}


else if(command === 'addpd'){
    const userName = args.join(" ").split(22)


if(onlinePD == undefined){
    onlinePD = userName;
}
else {onlinePD = onlinePD + `\n ${userName}`
}
channel = message.channel;



channel.messages.fetch('816533944329175040')

.then(message => message.edit(
    new Discord.MessageEmbed()
.setTitle('CURRENT ACTIVE USERS')
.setDescription(`**ONLINE POLICE** \n${onlinePD}\n\n **ONLINE EMS**\n${onlineEMS}`)
.setColor('RED'))
)


message.reply(`${userName} is now On duty.`).then(message => message.delete({ timeout: 10000}))
message.delete({ timeout: 1000})

console.log(onlinePD)
}


else if(command === 'addems'){
    const userName = args.join(" ").split(22)


if(onlineEMS == undefined){
    onlineEMS = userName;
}

else {onlineEMS = onlineEMS + `\n ${userName}`
}
channel = message.channel;



channel.messages.fetch('816533944329175040')
.then(message => message.edit(
    new Discord.MessageEmbed()
.setTitle('CURRENT ACTIVE USERS')
.setDescription(`**ONLINE POLICE** \n${onlinePD}\n\n **ONLINE EMS**\n${onlineEMS}`)
.setColor('RED'))
)

console.log(onlineEMS)

message.reply(`${userName} is now On Duty.`).then(message => message.delete({ timeout: 10000}))
message.delete({ timeout: 1000})

}

else if(command === 'removepd'){

    const userName = args.join(" ").split(22)

    onlinePD = onlinePD - userName;
  
        
   




    channel = message.channel;



channel.messages.fetch('816533944329175040')
.then(message => message.edit(
    new Discord.MessageEmbed()
.setTitle('CURRENT ACTIVE USERS')
.setDescription(`**ONLINE POLICE** \n${onlinePD}\n\n **ONLINE EMS**\n${onlineEMS}`)
.setColor('RED'))
)

console.log(onlinePD)

message.reply(`${userName} is now Off Duty.`).then(message => message.delete({ timeout: 10000}))
message.delete({ timeout: 1000})



}
})
})



client.login(token)








