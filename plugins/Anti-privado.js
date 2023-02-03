export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner && !isROwner) {
       await m.reply(`*ʜᴏʟᴀ* @${m.sender.split`@`[0]}, *👋ʟᴏ ʟᴀᴍᴇɴᴛᴏ ᴘᴇʀᴏ ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴇʟ ᴄʜᴀᴛ ᴘʀɪᴠᴀᴅᴏ sᴇʀᴀ ʙʟᴏǫᴜᴇᴀᴅᴏ🍀*`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
