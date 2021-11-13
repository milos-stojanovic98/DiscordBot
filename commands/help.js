//Help command
const { MessageEmbed } = require('discord.js');

module.exports = { 

  name: "help",
  description: "listing all commands",
  execute(message, args, Discord){

   const newEmbed = new MessageEmbed()
	  .setColor('#0099ff')
	  .setTitle('Commands list')
	  .setURL('https://youtube.com')
	  .setAuthor('Hasbi Discord Team', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8kPGo8k-vDEpE4wSf6FAJKypbEA0CiEOLA&usqp=CAU')
	  .setDescription('This is the list of all available commands:')
	  .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8kPGo8k-vDEpE4wSf6FAJKypbEA0CiEOLA&usqp=CAU')
	  .addFields(
		  { name: "\:one:  $inspire", value: 'Inspirational quote.' },
		  { name: "\:two:  $joke", value: 'Replies with a joke.' },
      { name: "\:three:  $clear", value: 'Delete desired amount of messages.' },
      { name: "\:four:  $play", value: 'Plays the song. e.g: $play song name .' },
      { name: "\:five:  $nowplaying", value: 'Shows the currently playing song.' },
       { name: "\:six:  $skip", value: 'Skips currently playing song.' },
      { name: "\:seven:  $stop", value: 'Stops currently playing song and disconnecting from channel.' },
  	)
	  .setImage('https://theancestory.com/wp-content/uploads/2021/05/Mini_Khabib_with_Khabib_Nurmagomedov-300x291.jpg')
	  .setTimestamp()
	  .setFooter('Bot Hasbi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8kPGo8k-vDEpE4wSf6FAJKypbEA0CiEOLA&usqp=CAU');

    message.channel.send({ embeds: [newEmbed] });

  }
}