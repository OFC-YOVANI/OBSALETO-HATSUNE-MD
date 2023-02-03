let handler = async (m, { conn, text, command }) => {
    let yh = global.gawrgura
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ gawr gura- ɪѕ ᴄᴜᴛᴇ `.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
  }
  handler.command = /^(gawrgura|Gawrgura)$/i
  handler.tags = ['anime']
  handler.help = ['gawrgura']
  export default handler
  
  global.gawrgura= [
"https://i.imgur.com/vFQIQVk.gif",
"https://i.imgur.com/aOU8mzP.jpeg",
"https://i.imgur.com/HE1dWt6.png",
"https://i.imgur.com/l14EZXD.png",
"https://i.imgur.com/jRA9pwD.jpeg",
"https://i.imgur.com/Z2NPJuD.jpeg",
"https://i.imgur.com/hJoJs8b.jpeg",
"https://i.imgur.com/5e8Ummg.jpeg",
"https://i.imgur.com/IULC1Xu.jpeg",
"https://i.imgur.com/KZbmhua.jpeg",
"https://i.imgur.com/tXSLSWY.jpeg",
"https://i.imgur.com/6UesKGw.png",
"https://i.imgur.com/IriuTS5.jpeg",
"https://i.imgur.com/89DyXVv.png",
"https://i.imgur.com/yyrybkg.jpeg",
"https://i.imgur.com/or8saDs.jpeg",
"https://i.imgur.com/JWrKxqj.jpeg",
"https://i.imgur.com/l6tpf1c.jpeg",
"https://i.imgur.com/PuX2ppE.jpeg",
]