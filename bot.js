const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594895007744393259")
setInterval(function() {
channel.send(`Yes I do, I believe
That one day I will be, where I was
Right there, right next to you
And it's hard, the days just seem so dark
The moon, and the stars, are nothing without you
Your touch, your skin, where do I begin?
No words can explain, the way i'm missing you
Deny this emptiness, this hole that i'm inside
These tears, they tell their own story
You told me not to cry when you were gone
But the feeling's overwhelming, it's much too strong
Can I lay by your side, next to you, you
And make sure you're alright
I'll take care of you,
And I don't want to be here if I can't be with you tonight
I'm reaching out to you
Can you hear my call 
This hurt that I've been through
I'm missing you, missing you like crazy
Can I lay by your side, next to you, to you
And make sure you're alright
I'll take care of you,
And I don't want to be here if I can't be with you tonight
Lay me down tonight, lay me by your side
Lay me down tonight
Lay me by your side
Can I lay by your side, next to you, you
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
