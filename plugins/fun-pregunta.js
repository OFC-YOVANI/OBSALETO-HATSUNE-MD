let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙎𝙐 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝘿𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Hoy va llover?*\n\n𝙒𝙍𝙄𝙏𝙀 𝙔𝙊𝙐𝙍 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙏𝙊 𝘽𝙀 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙━⊷ 
┃ ⛥┃${['Si','Tal vez sí','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
┃ ⛥┃ ${vs}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, '𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓', null, null, [
['𝐎𝐓𝐑𝐀 𝐕𝐄𝐙🔮', `${usedPrefix + command} ${text}`],
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler