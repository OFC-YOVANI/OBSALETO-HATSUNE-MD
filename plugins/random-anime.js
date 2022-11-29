import axios from "axios"
let handler = async (m, {command, conn}) => {
 {await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
if (command == 'miku') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}  
}
handler.command = handler.help = ['miku']
handler.tags = ['anime']
export default handler
