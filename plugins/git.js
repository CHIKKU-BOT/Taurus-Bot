const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://ibb.co/cJp2fTY";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*TAURUS BOT BY MUHAMMED*

*ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝ᴛᴀᴜʀᴜs࿐*

*Creator number : wa.me/919961050829?text=Hi%20muhammed%20*



*ʙᴏᴛ sᴇᴛᴛɪɴɢ ᴠɪᴅᴇᴏ sᴏᴏɴ ᴏɴ : https://youtube.com/channel/UCeYZqtAtdYq8VwSIkW34JMA .*



*ɢɪᴛʜᴜʙ ʟɪɴᴋ (sᴇᴛᴜᴘ)  :    https://github.com/Muhammed-usrbot/Taurus-Bot .*


*ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs :   https://github.com/muhammed-usrbot/Taurus-Bot/tree/master/uploads .*


*sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs : https://github.com/muhammed-usrbot/Taurus-Bot/tree/master/sticker .*


*ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs sᴜʙsᴄʀɪʙᴇ ᴍʏ ᴄʜᴀɴɴᴇʟ*

©2021 ᴍᴜʜᴀᴍᴍᴇᴅ
`}) 

}));
