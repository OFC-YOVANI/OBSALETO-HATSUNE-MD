import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗]ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ ǫᴜᴇ ǫᴜɪᴇʀᴇs ʙᴜsᴄᴀʀ*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/es?apikey=85faf717d0545d14074659ad&text=${gPlay.descripcion}`)
let loll = await lol.json()
let mystic = loll.result.translated
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`
╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙━⊷ 
┃ ⛥│◦➛🔍 Resultado: ${gPlay.titulo}
┃ ⛥│◦➛🧬 Identificador: ${gPlay.id}
┃ ⛥│◦➛⛓️ Link: ${gPlay.link}
┃ ⛥│◦➛🖼️ Imagen: ${gPlay.imagen}
┃ ⛥│◦➛✍️ Desarrollador: ${gPlay.desarrollador}
┃ ⛥│◦➛📜 Descripcion: ${mystic}
┃ ⛥│◦➛💲 Moneda: ${gPlay.moneda}
┃ ⛥│◦➛🎭 Gratis?: ${gPlay.gratis}
┃ ⛥│◦➛💸 Precio: ${gPlay.precio}
┃ ⛥│◦➛📈 Puntuacion: ${gPlay.puntuacion}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`},{quoted:m})
} catch {
await m.reply('*[❗] ʟᴏ sᴇɴᴛɪᴍᴏs ʜᴀ sᴜʀɢɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
