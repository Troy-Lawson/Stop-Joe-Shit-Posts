'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var logger = require('winston');
var blockedMessages = [
    "Whoa! This post is way too funny for this Discord. I’m gonna need to remove this.",
    "Great find Joe! I’m going to move this link from this Discord to my own personal stash.",
    "Did you know: Memes found on 9gag are 420x more funny than memes found on Instagram, Reddit, Twitter or Imgur. Neat!",
    "Did you know: “Nien Gag” means “Not Funny” in German.",
    "I’m going to add this to my “Top 10 Funniest Memes of 2015 - You Laugh You Lose Compilation (Very Emotional MUST WATCH)” video for youtube. Thanks for the find!",
    "Did you know: I have a bank of witty sayings for me to reply with! Collect them all!",
    "Hey! That meme was too spicy for Discord! Please keep in mind this is a clean Christian Discord server.",
    "This is an inclusive Discord, and I don’t think everyone will understand this meme so I put it away.",
    "This looks a little too much like anime. I’m going to remove it just in case!",
    "It is currently :tobe: Real Tofu Hour :tobe: This Discord is only accepting :tobe: Tofu Chan :tobe: links Your link has been removed, while we respect this sacred hour.",
    "Hold up mister! Only those who have watched season 2 of “Jojo’s Bizarre Adventure” are permitted to post links.",
    "STOP! You’ve violated the law. Your links to 9gag are now forfeit.",
    ];
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    
   if(msg.author.tag === 'Cyns#4059'){
      /* let user = {
           id: msg.author.id,
           tag: msg.author.tag,
           username: msg.author.username,
           discriminator: msg.author.discriminator,
           avatar: msg.author.avatarURL
       };

       let data = JSON.stringify(user);
       fs.writeFileSync('user.json', data);*/

       if(msg.content.toLowerCase().includes('9gag')){
           msg.delete();
           var message = blockedMessages[Math.floor(Math.random(0,blockedMessages.length-1)*10)];
           msg.channel.send(message);
       }/*else{
           if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(msg.content)) {
            msg.channel.send('Joe posted a link. It could be a shit post. Should we ban him from posting from this URL? React with :regional_indicator_y: for yes or :regional_indicator_n: for no ');
        }
       }*/
        
      
   } 
 
});
  
client.login(process.env.DISCORD_BOT_KEY);

