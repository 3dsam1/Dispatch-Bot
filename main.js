const Discord = require('discord.js');
const fs = require('fs');


let token = '' // Your token here

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


//Test





if(command === 'ping'){
   
    client.commands.get('ping').execute(message, args);

}


else if(command === 'addpd'){
client.commands.get('addpd').execute(message, args);

}
})
})



client.login(token)








