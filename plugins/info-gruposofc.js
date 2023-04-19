import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
//let vn = './media/naa.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/CD6MbGV.jpeg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭━━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙
┃ ⛥╭──────────────      
┃ ⛥│๖ۜ͜𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${taguser}💖✨ 
┃ ⛥│⌚𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎 ${uptime}
┃ ⛥│📊𝐅𝐄𝐂𝐇𝐀 ${week}, ${date}
┃ ⛥│📈𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 ${rtotalreg}
┃ ⛥│🤴𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓 
┃ ⛥│http://wa.me/5212411719888  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----*GRUPOS OFICIALES*----⦿
┃ ⛥╭────────────◆
┃ ⛥│◦➛ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS 
┃ ⛥│◦➛☃️️ᩭ✎UNIRTE AL LOS💖 GRUPOS 
┃ ⛥│◦➛🌹️ᩭ✎OFICIALES DEL BOT DE👩‍🏫✨
┃ ⛥│◦➛🍃️ᩭ✎𝐇𝐀𝐃𝐄𝐒 _𝐁𝐎𝐓 y miku bot 
┃ ⛥│◦➛📚️ᩭ✎ SOMOS UNA FAMILIA DE BOTS 
┃ ⛥│◦➛☘️ᩭ✎🌹𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄🏓
┃ ⛥│◦➛✨ᩭ✎https://chat.whatsapp.com/BuloWd29LSnDZHXtUJDybF
┃ ⛥│◦➛☘️ᩭ✎🔮𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙼𝙳🧿
┃ ⛥│◦➛✨ᩭ✎https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf
┃ ⛥│◦➛☘️ᩭ✎༺✮𝚂𝙾𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃✮༻
┃ ⛥│◦➛✨ᩭ✎https://chat.whatsapp.com/Jhs2WrdiNzY3CML7shPwot
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: '🧿ᴍᴇɴᴜ⛄' }, type: 1 },
{ buttonId: '/donar', buttonText: { displayText: '🏓ᴅᴏɴᴀʀ🎐' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '⛄𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓🔮',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^linkgc|grupos|grupos|grupos|grupos|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
