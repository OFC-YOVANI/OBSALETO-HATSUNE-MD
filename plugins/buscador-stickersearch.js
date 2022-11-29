import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*[❗] ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ ǫᴜᴇ ǫᴜɪᴇʀᴇs ʙᴜsᴄᴀʀ*`
try {
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
let json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=85faf717d0545d14074659ad&query=${text}`)
let jsons = await json.json()
let { stickers } = jsons.result[0]
let res = jsons.result.map((v, index) => `🌴 • Resultado: ${1 + index}\n*📌 • Nombre:* ${v.title}\n*🍀 • Autor:* ${v.author}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*[❗] ʟᴏ sᴇɴᴛɪᴍᴏs ʜᴀ sᴜʀɢɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ*')}}
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
