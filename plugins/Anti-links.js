let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*💎ᴇʀᴇs ᴀᴅᴍɪɴ ᴅᴇʟ ɢʀᴜᴘᴏ ᴛᴇ ᴛᴇ ʜᴀs sᴀʟᴠᴀᴅᴏ ᴅᴇ sᴇʀ ᴇʟɪᴍɪɴᴀᴅᴏ*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*ʟᴇ ❗ɪɴғᴏʀᴍᴏ ǫᴜᴇ ʜᴀ ʀᴏᴍᴘɪᴅᴏ ʟᴀs ʀᴇɢʟᴀs sᴇʀᴀ ᴇʟɪᴍɪɴᴀᴅᴏ ᴅᴇ ɪɴᴍᴇᴅɪᴀᴛᴏ☘️* ${await this.getName(m.sender)} *ʜᴀsᴛᴀ ʟᴀ ᴘʀᴏxɪᴍᴀ👋*${isBotAdmin ? '' : '\n❗] ᴇsᴛᴇ ʙᴏᴛ ɴᴏ ᴇs ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴇʟɪᴍɪɴᴀʀ'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗]ᴇʟ ɪɴғᴏʀᴍᴏ ǫᴜᴇ ᴘᴀʀᴀ ǫᴜᴇ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ғᴜɴᴄɪᴏɴᴇ ᴛɪᴇɴᴇs ǫᴜᴇ ᴀᴄᴛɪᴠᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ [ᴇɴᴀʙʟᴇ  ʀᴇsᴛʀɪᴄᴛ] sᴏʟᴏ ғᴜɴᴄɪᴏɴᴀ ᴘᴀʀᴀ ᴇʟ ᴀᴅᴍɪɴ ᴅᴇ ɢʀᴜᴘᴏ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ*')
}
return !0
}
