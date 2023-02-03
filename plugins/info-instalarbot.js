let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `╭━━〘𝐓𝐇𝐄_𝐌𝐈𝐊𝐔_𝐁𝐎𝐓〙━━⊷
┃ ⛥╭──────────────      
┃ ⛥│🧿 ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚 gracias por 🥳solicitar la instalación 🤖 del bot gracias por tu preferencia te dejaré los requisitos para 👩‍💻instalar el bot cualquier duda puedes contactarme a mi número personal en caso de si  necesitas ayuda para instalar 🤴
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
┃ ⛥│http://wa.me/5212411719888
┃ ⛥│𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢
┃ ⛥│https://youtu.be/HoxZuQokeMM
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│pkg update && pkg upgrade
┃ ⛥│pkg install git -y
┃ ⛥│pkg install nodejs -y
┃ ⛥│pkg install ffmpeg -y
┃ ⛥│pkg install imagemagick -y
┃ ⛥│termux-setup-storage
┃ ⛥│git clone https://github.com/OFC-YOVANI/HATSUNE-MIKU.git
┃ ⛥│cd HATSUNE-MIKU
┃ ⛥│npm install
┃ ⛥│npm update
┃ ⛥│npm start
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│Si el termux se cierra para volver activar escribe:
┃ ⛥│cd HATSUNE-MIKU
┃ ⛥│npm start 
┃ ⛥│Para obtener nuevamente el 
┃ ⛥│codigo QR, escribe en el termux:
┃ ⛥│cd HATSUNE-MIKU
┃ ⛥│rm -rf session.data.json
┃ ⛥│npm start 
┃ ⛥│Cada vez que realices una modificacion en el
┃ ⛥│repositorio del Bot (tu GitHub), puedes usar 
┃ ⛥│el comando #actualizar para que se actualicen los datos
┃ ⛥│Aconsejable maximo 30 grupos, despues 
┃ ⛥│de esa cantidad el Bot empieza a ir 
┃ ⛥│excesivamente lento (depende del
┃ ⛥│WhatsApp igual)
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `🍀𝐓𝐇𝐄-𝐇𝐀𝐃𝐄𝐒-𝐁𝐎𝐓-𝐌𝐃✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HATSUNE-MIKU.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '🧿ɢɪᴛʜᴜʙ🏓'}, type: 1}, 
{buttonId: `${usedPrefix}yovani`, buttonText: {displayText: '🤴ᴄᴏɴᴛᴀᴄᴛᴏ🧿'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['instalarbot','script']
export default handler