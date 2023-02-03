import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
 {await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo)$/i
export default handler
