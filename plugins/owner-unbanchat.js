let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*│✔️│𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚏𝚞𝚎 𝚍𝚎𝚜 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🌴*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
export default handler
