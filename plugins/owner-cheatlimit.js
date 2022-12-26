let handler = async (m, { conn }) => {

    let user = global.db.data.users[m.sender]

        conn.reply(m.chat, `*Succes Cheat !*`, m)

        global.db.data.users[m.sender].money = 999999

        global.db.data.users[m.sender].limit = 9

        global.db.data.users[m.sender].level = 1

        global.db.data.users[m.sender].exp = 2000

        global.db.data.users[m.sender].diamond = 555

        global.db.data.users[m.sender].pet = 55

        global.db.data.users[m.sender].gold =555

        global.db.data.users[m.sender].emerald =55

        global.db.data.users[m.sender].legendary =99

}

handler.command = /^(curang)$/i

handler.mods = true

export default handler
