const { dateGenerator } = require("../helpers/dateGenerator")
const { dayValidation } = require("../helpers/dayValidation")
const { taskFormat } = require("../helpers/taskFormat")

const startBot = (client) => {
    client.on('message', (msg) => {
        const { from, to, body } = msg
        const bodySplitted = body.split(' ')
        if (bodySplitted[0].toLowerCase() === 'recordame') {
            if (dayValidation(bodySplitted[1]) || dayValidation(bodySplitted[2])) {
                const whenReminder = dayValidation(bodySplitted[1]) ? bodySplitted[1] : bodySplitted[2]
                const hour = body.toLowerCase().split('a las').length > 0? (body.toLowerCase().split('a las')[1]) : (body.toLowerCase().split('a la')[1])
                const finalDate = dateGenerator(whenReminder.trim(), hour.trim())
                const task = taskFormat(body, hour)
                client.sendMessage(from, `⌚ Recordatorio creado - [${finalDate}] - ${task} ⌚`)
            }
            else {
                client.sendMessage(from, 'Error al procesar el mensaje')
            }
        }
        else {
            client.sendMessage(from, 'Comando invalido, envie "ayuda" y se mostraran todos los comandos')
        }

        client.sendMessage(from, 'Funcionó')
    })

}

module.exports = {
    startBot
}