let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `🤖ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ ʜᴀᴄᴇ ᴜsᴏ ᴇʟ ʙᴏᴛ ☃️ʜᴀᴛsᴜɴᴇ-ᴍɪᴋᴜ-ʙᴏᴛ
⏱️ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ\n${muptime}`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'ᴅÍᴀs(s) ️', h, 'ʜᴏʀᴀ(s) ', m, 'ᴍɪɴᴜᴛᴏs(s)'].map(v => v.toString().padStart(2, 0)).join('')
}