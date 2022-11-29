import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗]ᴇᴊᴇᴍᴘʟᴏ ᴜsᴀ ᴇʟ ᴄᴏʀʀᴇᴄᴛᴏʀ  ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs* : ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙━⊷ 
┃ ⛥││◦➛𝐓𝐈𝐓𝐔𝐋𝐎: *${result.title}*
┃ ⛥││◦➛𝐀𝐔𝐓𝐎𝐑 ${result.author}
┃ ⛥││◦➛${result.lyrics}
┃ ⛥││◦➛𝐔𝐑𝐋 ${result.link}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['ᴅᴇsᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏ', `/play.1 ${text}`],
['ᴅᴇsᴄᴀʀɢᴀʀ ᴀᴜᴅɪᴏ', `/play.2 ${text}`]
], m)
} catch (e) {
m.reply('*[❗] ʟᴏ sᴇɴᴛɪᴍᴏs ʜᴀ sᴜʀɢɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ*')
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 4
export default handler
