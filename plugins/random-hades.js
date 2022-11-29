let handler = async (m, { conn, text, command }) => {
    let yh = global.hades
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ hades- ɪѕ ᴄᴜᴛᴇ `.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
  }
  handler.command = /^(Hades|hades)$/i
  handler.tags = ['anime']
  handler.help = ['hades']
  export default handler
  
  global.hades = [
"https://imgur.com/a/rMXQxsk",
"https://i.imgur.com/txizG0t.jpg",
"https://i.imgur.com/awonAdj.jpeg",
"https://i.imgur.com/OeVTqyT.jpeg",
"https://i.imgur.com/GizvVDj.jpeg",
"https://i.imgur.com/SXA3AqC.jpeg",
"https://i.imgur.com/bduq3cT.jpeg",
"https://i.imgur.com/hNt6sBh.jpeg",
"https://i.imgur.com/Zj4lqTO.jpeg",
"https://i.imgur.com/lJsKtiP.jpeg",
"https://i.imgur.com/1U1Pt7I.jpeg",
"https://i.imgur.com/Xi4ahzj.jpeg",
"https://i.imgur.com/TyPYGy3.jpeg",
"https://i.imgur.com/TnqyBXy.jpeg",
"https://i.imgur.com/dSz1ybQ.jpeg",
"https://i.imgur.com/gRNiuxi.jpeg",
"https://i.imgur.com/qSkJy3C.jpeg",
"https://i.imgur.com/9HIrJIf.jpeg",
"https://i.imgur.com/lN9ttPk.jpeg",
"https://i.imgur.com/Y007f57.jpeg",
"https://i.imgur.com/R1lx1pg.jpeg",
"https://i.imgur.com/513T2GO.jpeg",
"https://i.imgur.com/t9hO3LC.jpeg",
"https://i.imgur.com/4Qdhp6U.jpeg",
"https://i.imgur.com/k7xmuq9.jpeg",
"https://i.imgur.com/SQrDhAY.jpeg",
"https://i.imgur.com/7rNdKV6.jpeg",
"https://i.imgur.com/8S3rbDF.jpeg",
]