let handler = async (m, { conn, text, command }) => {
    let yh = global.helaila
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ helaila - ɪѕ ᴄᴜᴛᴇ `.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
  }
  handler.command = /^(helaila|Helaila)$/i
  handler.tags = ['anime']
  handler.help = ['helaila']
  export default handler
  
  global.helaila = [
"https://i.imgur.com/nZcfBBy.jpeg",
"https://i.imgur.com/8izhGnd.jpeg",
"https://i.imgur.com/cTcSVMy.jpeg",
"https://i.imgur.com/yrCaPu3.jpeg",
"https://i.imgur.com/ijHifdi.jpeg",
"https://i.imgur.com/HdKysJK.jpeg",
"https://i.imgur.com/v2EySDz.jpeg",
"https://i.imgur.com/s8bNbsC.jpeg",
"https://i.imgur.com/SRaYSpx.jpeg",
"https://i.imgur.com/mDhQP5z.jpeg",
"https://i.imgur.com/ezqG1BL.jpeg",
"https://i.imgur.com/C6b5idW.jpeg",
"https://i.imgur.com/QSZiNgv.jpeg",
"https://i.imgur.com/dVwXbc4.jpeg",
"https://i.imgur.com/b5u7sAn.jpeg",
"https://i.imgur.com/hvw5NMS.jpeg",
"https://i.imgur.com/zq9sntm.jpeg",
"https://i.imgur.com/m5LiNh3.jpeg",
"https://i.imgur.com/HeI2e14.jpeg",
"https://i.imgur.com/ACpDw8x.jpeg",
"https://i.imgur.com/91znTwr.jpeg",
"https://i.imgur.com/yTgr3nd.jpeg",
"https://i.imgur.com/0ysnO16.jpeg",
"https://i.imgur.com/FHQp6n9.jpeg",
"https://i.imgur.com/Q5SaPLT.jpeg",
"https://i.imgur.com/w2Xvwh1.jpeg",
"https://i.imgur.com/AdvGPvt.jpeg",
"https://i.imgur.com/kDxjRiL.jpeg",
"https://i.imgur.com/nQXAoVK.jpeg",
"https://i.imgur.com/PoCYhzR.jpeg",
"https://i.imgur.com/ogJwmhR.jpeg",
"https://i.imgur.com/PogtMPv.jpeg",
"https://i.imgur.com/pHsK12J.jpeg",
"https://i.imgur.com/dkGhST2.jpeg",
"https://i.imgur.com/HSsaWrv.jpeg",
"https://i.imgur.com/Ey7yNzm.jpeg",
"https://i.imgur.com/B0N26BJ.jpeg",
"https://i.imgur.com/L4Snqt6.jpeg",
"https://i.imgur.com/RdFt3YV.jpeg",
"https://i.imgur.com/r8INmsd.jpeg",
"https://i.imgur.com/Lvp4kD0.jpeg",
"https://i.imgur.com/1S6UMwO.jpeg", 
]