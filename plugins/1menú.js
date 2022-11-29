import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
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
let str = `╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙
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
┃✯----𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒----⦿
┃ ⛥╭────────────◆
┃ ⛥│/Hades
┃ ⛥│/Miku
┃ ⛥│/canta miku
┃ ⛥│/canta miku2
┃ ⛥│/instagram→enlace→link
┃ ⛥│/mediafire→enlace→link
┃ ⛥│/gitclone→enlace→link
┃ ⛥│/gdrive→enlace→link
┃ ⛥│/tiktok→enlace→link
┃ ⛥│/xvideosdl→enlace→link
┃ ⛥│/twitter→enlace→link
┃ ⛥│/Facebook→enlace→link
┃ ⛥│/ytmp3→enlace→link
┃ ⛥│/ytmp4→enlace→link
┃ ⛥│/ytmp3doc→enlace→link
┃ ⛥│/ytmp4doc→enlace→link
┃ ⛥│/stickerpack→enlace→link
┃ ⛥│/play→texto
┃ ⛥│/play.1→texto
┃ ⛥│/play.2→texto
┃ ⛥│/playdoc→texto
┃ ⛥│/playlist→texto
┃ ⛥│/playlist2→texto
┃ ⛥│/spotify→texto
┃ ⛥│/stickerly→texto
┃ ⛥│/ringtone→texto
┃ ⛥│/soundcloud→texto
┃ ⛥│/imagen→texto
┃ ⛥│/pinteret→texto
┃ ⛥│/wallpaper→texto
┃ ⛥│/wallpaper2→texto
┃ ⛥│/pptiktok→nombre de usuario
┃ ⛥│/igstalk→nombre de usuario
┃ ⛥│/igstory→nombre de usuario
┃ ⛥│/tiktokstalk→username
┃ ⛥╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒----⦿
┃ ⛥╭────────────◆
┃ ⛥│/emojimix→emoji 1→&→emoji 2
┃ ⛥│/attp→texto
┃ ⛥│/ttp→texto
┃ ⛥│/pat→@tag
┃ ⛥│/slap→@tag
┃ ⛥│/kiss→@tag
┃ ⛥│/dado
┃ ⛥│/wm→packname→author
┃ ⛥│/stickermarker→efecto →responder a imagen
┃ ⛥│/stickerfilter→efecto→responder a imagen
┃ ⛥│/searchsticker→links
┃ ⛥│/toimg→responde a un sticker
┃ ⛥╰───────────◆
╰────────────┈⊷
╭─────────────◆ 
┃✯----𝐉𝐔𝐄𝐆𝐎𝐒----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│/mates→noob→easy→medium→hard→extreme→impossible→impossible2>
┃ ⛥│/ppt→papel→tijera→piedra>
┃ ⛥│/prostituto→nombre→@tag>
┃ ⛥│/prostituta→nombre→@tag>
┃ ⛥│/gay2→nombre→@tag>
┃ ⛥│/lesbiana→nombre→@tag>
┃ ⛥│/pajero→nombre→@tag>
┃ ⛥│/pajera→nombre→@tag>
┃ ⛥│/puto→nombre→@tag>
┃ ⛥│/puta→nombre→@tag>
┃ ⛥│/manco→nombre→@tag>
┃ ⛥│/manca→nombre→@tag>
┃ ⛥│/rata→nombre→@tag>
┃ ⛥│/love→nombre→@tag>
┃ ⛥│/Follar→nombre→@tag>
┃ ⛥│/doxear→nombre→@tag>
┃ ⛥│/pregunta→texto>
┃ ⛥│/suitpvp→@tag>
┃ ⛥│/slot→apuesta>
┃ ⛥│/ttt→nombre sala>
┃ ⛥│/delttt
┃ ⛥│/simi→texto>
┃ ⛥│/top→texto>
┃ ⛥│/topgays_
┃ ⛥│/topotakus_
┃ ⛥│/formarpareja_
┃ ⛥│/verdad_
┃ ⛥│/reto_
┃ ⛥│/cancion_
┃ ⛥│/pista_
┃ ⛥╰───────────◆
╰────────────┈⊷
╭─────────────◆ 
┃✯----𝐃𝐈𝐒𝐓𝐎𝐑𝐒𝐈𝐎𝐍𝐀𝐑 𝐕𝐎𝐙----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│/bass_
┃ ⛥│/blown_
┃ ⛥│/deep_
┃ ⛥│/earrape_
┃ ⛥│/fast_
┃ ⛥│/fat_
┃ ⛥│/nightcore_
┃ ⛥│/reverse_
┃ ⛥│/robot_
┃ ⛥│/slow_
┃ ⛥│/smooth_
┃ ⛥│/tupai_
┃ ⛥╰───────────◆
╰────────────┈⊷
╭─────────────◆ 
┃✯----𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒----⦿
┃ ⛥╭───────
┃ ⛥│/togifaud→video>
┃ ⛥│/toimg→sticker>
┃ ⛥│/tomp3→video>
┃ ⛥│/tomp3→nota de voz>
┃ ⛥│/toptt→video / audio>
┃ ⛥│/tovideo→sticker>
┃ ⛥│/tourl→video→imagen→audio>
┃ ⛥│/tts es →texto>
┃ ⛥╰───────────◆
╰────────────┈⊷
╭─────────────◆ 
┃✯----𝐋𝐎𝐆𝐑𝐎𝐒----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│/mensajefalso→nombre|mensaje>
┃ ⛥│/phmaker→opcion→imagen>
┃ ⛥│/logos→efecto→texto>
┃ ⛥│/logochristmas→texto>
┃ ⛥│/logocorazon→texto>
┃ ⛥│/ytcomment→texto>
┃ ⛥│/hornycard→@tag>
┃ ⛥│/simpcard→@tag>
┃ ⛥│/lolice→@tag>
┃ ⛥│/itssostupid_
┃ ⛥│/pixelar_
┃ ⛥│/blur_
┃ ⛥╰───────────◆
╰────────────┈⊷
╭─────────────◆ 
┃✯----𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀----⦿
┃ ⛥╭────────────◆ 
┃ ⛥│/stickersearch→texto>
┃ ⛥│/stickersearch2→texto>
┃ ⛥│/xnxxsearch→texto>
┃ ⛥│/animeinfo→texto>
┃ ⛥│/google→texto>
┃ ⛥│/letra→texto>
┃ ⛥│/wikipedia→texto>
┃ ⛥│/ytsearch→texto>
┃ ⛥│/apkdone→texto>
┃ ⛥│/apkgoogle→texto>
┃ ⛥│/apkmody→texto>
┃ ⛥│/apkshub→texto>
┃ ⛥│/happymod→texto>
┃ ⛥│/hostapk→texto>
┃ ⛥│/revdl→texto>
┃ ⛥│/toraccino→texto>
┃ ⛥│/uapkpro→texto>
┃ ⛥│/playstore→texto>
┃ ⛥╰───────────◆
╰────────────┈⊷
╭─────────────◆ 
┃✯--𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍𝐈𝐒---⦿
┃ ⛥╭────────────◆ 
┃ ⛥│/setprefix→prefijo>
┃ ⛥│/resetprefix>
┃ ⛥│/autoadmin>
┃ ⛥│/leavegc>
┃ ⛥│/disable→antitraba>
┃ ⛥│/enable→antiarabes>
┃ ⛥│/disable→antiarabes>
┃ ⛥│️️/enable→modoadmin>
┃ ⛥│/disable→modoadmi>
┃ ⛥│/enable→antilink>
┃ ⛥│/disable→antilink>
┃ ⛥│/enable→antilink2>
┃ ⛥│/disable→antilink2>
┃ ⛥│/enable→welcome>
┃ ⛥│/disable→welcome>
┃ ⛥│/enable→restrict>
┃ ⛥│/disable→restrict>
┃ ⛥│/enable→autoread>
┃ ⛥│/disable→autoread>
┃ ⛥│/enable→antiToxic
┃ ⛥│/disable→antiToxi
┃ ⛥│/enable→autosticker
┃ ⛥│/disable→autosticker
┃ ⛥│/enable→autolevelup
┃ ⛥│/disable→autolevelup
┃ ⛥│/enable→public>
┃ ⛥│/disable→public>
┃ ⛥│/enable→pconly>
┃ ⛥│/disable→pconly>
┃ ⛥│/enable→gconly>
┃ ⛥│/disable→gconly>
┃ ⛥│/enable→anticall>
┃ ⛥│/disable→anticall>
┃ ⛥│/enable→antiprivado>
┃ ⛥│/disable→antiprivado>
┃ ⛥│/banchat>
┃ ⛥│/unbanchat>
┃ ⛥│/banuser→@tag>
┃ ⛥│/unbanuser→@tag>
┃ ⛥│/banuser→@tag>
┃ ⛥│/bc→texto>
┃ ⛥│/bcchats→texto>
┃ ⛥│/bcgc→texto>
┃ ⛥│/bcbot→texto>
┃ ⛥│/cleartpm>
┃ ⛥│/restart>
┃ ⛥│/update>
┃ ⛥│/banlist>
┃ ⛥│/addprem→@tag>
┃ ⛥│/delprem→@tag>
┃ ⛥│/listprem>
┃ ⛥│/listcmd>
┃ ⛥│/setppbot→responder→a→imagen>
┃ ⛥│/addcmd→texto→responder→a→sticker→imagen>
┃ ⛥│/delcmd→responder→a→sticker→imagen→con→comando→o→texto→asignado>
┃ ⛥╰───────────◆
╰────────────┈⊷`.trim()
let buttons = [
{ buttonId: '/yovani', buttonText: { displayText: '𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎' }, type: 1 },
{ buttonId: '/grupos', buttonText: { displayText: '𝐆𝐑𝐔𝐏𝐎𝐒' }, type: 1 }]
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
title: '🔮𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓🍁',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
