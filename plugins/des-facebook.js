import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\n𝙀𝙉𝙏𝙀𝙍 𝘼 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `✨ *ENLACE | URL:* ${url}`, m)
  let info = `💖𝚃𝚄 𝙿𝙴𝙳𝙸𝙳𝙾 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 É𝚇𝙸𝚃𝙾🥳 𝙳𝙴𝚂𝙴𝙰𝚂 𝙿𝙴𝙳𝙸𝚁 𝙰𝙻𝙶𝙾 𝙼Á𝚂👩‍💻\n\n💖𝚈𝙾𝚄𝚁 𝙾𝚁𝙳𝙴𝚁 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈, 𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃🥳 𝚃𝙾 𝙾𝚁𝙳𝙴𝚁 𝚂𝙾𝙼𝙴𝚃𝙷𝙸𝙽𝙶 𝙴𝙻𝚂𝙴?👩‍💻
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.exp = 35
export default handler
