/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
  let isClose = {
	  'open': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'close': 'announcement',
	  'tutup': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined) {
	  let caption = `╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙━⊷ 
┃ ⛥││*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
┃ ⛥│✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
┃ ⛥│${usedPrefix + command} open 1*
┃ ⛥│${usedPrefix + command} close 1*
┃ ⛥│📌 *_Ejemplo de uso:_* *${usedPrefix + command} close 1* 
┃ ⛥│*_🌿 Para que el grupo este cerrado una hora._*
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`
      m.reply(caption)
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
	  m.reply(`⚠️ *_Grupo ${isClose == 'announcement' ? 'cerrado' : 'abierto'} ${args[1] ? `durante *${clockString(timeoutset)}_*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*El grupo ha sido cerrado, ¡ahora solo los administradores pueden enviar mensajes!*' : '*El grupo se ha abierto, ¡ahora todos los miembros pueden enviar mensajes!*'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['grouptime *<open/close>* *<número>*']
handler.tags = ['group']
handler.command = /^(grouptime|gctime)$/i

handler.botAdmin = true
handler.group = true 
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
