const Discord = require('discord.js');

module.exports = {
    name: 'addpd',
    description: 'Adds a user to the On Duty Police',
    execute(message, args){

        const userName = args.join(" ").split(22)

        if(args < 1){
             return message.reply('Please specify someone you would like to ban').then(message => message.delete({ timeout: 5000}))
            .then(message.delete({ timeout: 5000}))
        }


        if(onlinePD == undefined){
            onlinePD = userName
        }
        else {onlinePD = onlinePD + `\n ${userName}`
        }
        channel = message.channel;
        console.log(channel)
        
        
        channel.messages.fetch('816533944329175040')
        .then(console.log(message.content))
        .then(message => message.edit(
            new Discord.MessageEmbed()
        .setTitle('CURRENT ACTIVE USERS')
        .setDescription(`**ONLINE POLICE** \n${onlinePD}\n\n **ONLINE EMS**\n${onlineEMS}`)
        .setColor('RED'))
        )
        console.log(onlinePD)
        
        message.reply(`${userName} is now On duty.`).then(message => message.delete({ timeout: 5000}))
        message.delete({ timeout: 1000})

    }
}
