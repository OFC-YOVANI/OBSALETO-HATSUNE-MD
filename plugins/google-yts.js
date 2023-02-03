import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '*[❗] ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ ǫᴜᴇ ǫᴜɪᴇʀᴇs ʙᴜsᴄᴀʀ*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `╭─────°.♡.°‧─────
│◦➛🍀 *${v.title}* (${v.url})
│◦➛🫐 *_Link :_* ${v.url}
│◦➛🕒 *_Duración :_* ${v.timestamp}
│◦➛🌴 𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${v.durationH}
│◦➛📌 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘 ${v.publishedTime}
│◦➛📥 *_Subido :_* ${v.ago}
│👁 *_Vistas :_* ${v.views}
╰─────°.♡.°‧───── `}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 

export default handler