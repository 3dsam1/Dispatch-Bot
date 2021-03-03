module.exports = {
    name: 'addpd',
    description: 'Adds a user to the On Duty Police',
    execute(message, args){

        message.channel.send(new Discord.MessageEmbed().setTitle("Pinging...")
        .setDescription("Please wait.")).then(pingMessage => {
            var ping = pingMessage.createdTimestamp - message.createdTimestamp;
    
            pingMessage.edit(new Discord.MessageEmbed().setTitle("Latency :ping_pong:")
                .setDescription(`Bot: ${ping} ms\nAPI: ${client.ws.ping} ms`))
            .then
        });
    
    
    
    
    
    }
}
