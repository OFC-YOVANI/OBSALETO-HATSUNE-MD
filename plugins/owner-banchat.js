let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*│‼️│𝚎𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚑𝚊 𝚜𝚒𝚍𝚘 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚗𝚘 𝚎𝚜𝚝𝚊𝚛𝚊 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚋𝚘𝚝 𝚑𝚊𝚜𝚝𝚊 𝚚𝚞𝚎 𝚜𝚎𝚊 𝚍𝚎𝚜 𝚋𝚊𝚗𝚎𝚊𝚍𝚘🗝️*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
