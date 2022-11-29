import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙━⊷ 
┃ ⛥│🍀*𝙽𝙾𝙼𝙱𝚁𝙴:* ${filename}
┃ ⛥│💎*𝙿𝙴𝚂𝙾:* ${filesizeH}
┃ ⛥│🌴*𝚃𝙸𝙿𝙾:* ${ext}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴',
body: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i

export default handler
