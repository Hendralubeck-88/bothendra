let handler = async (m, { conn }) => {

    let user = global.db.data.users[m.sender]

        conn.reply(m.chat, `*Succes Cheat !*`, m)

        global.db.data.users[m.sender].money = 999999999

        global.db.data.users[m.sender].limit = 9999

        global.db.data.users[m.sender].level = 88888

        global.db.data.users[m.sender].exp = 98888888

        global.db.data.users[m.sender].diamond = 98888

        global.db.data.users[m.sender].pet = 888888

        global.db.data.users[m.sender].gold =989999

        global.db.data.users[m.sender].emerald =99999

        global.db.data.users[m.sender].legendary =9888889

}

handler.command = /^(curang)$/i

handler.mods = true

export default handler
