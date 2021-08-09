const { saveOnDb } = require("../db/saveOnDb")
const { dateGenerator } = require("../helpers/dateGenerator")
const { dayValidation } = require("../helpers/dayValidation")
const { taskFormat } = require("../helpers/taskFormat")
const { validateMessage,  isCorrectData, isValidDate } = require("./validations")


const startBot = (client) => {
    client.on('message', (msg) => {
        const { from, to, body } = msg
        const isValid = validateMessage(body, from, client)
        if(isValid){

            const bodySplitted = body.split(' ')
            if (bodySplitted[0].toLowerCase() === 'recordame') {
                if(isCorrectData(body, from, client)){
                    const whenReminder = dayValidation(bodySplitted[1]) ? bodySplitted[1] : bodySplitted[2]
                    const hour = body.toLowerCase().split('a las').length > 0? (body.toLowerCase().split('a las')[1]) : (body.toLowerCase().split('a la')[1])
                    const finalDate = dateGenerator(whenReminder.trim(), hour.trim())
                    const task = taskFormat(body, hour).trim()
                    saveOnDb({day:finalDate.split('-')[0], hour:finalDate.split('-')[1], task, number: from})
                    client.sendMessage(from, `⌚ Recordatorio creado - [${finalDate}] - ${task} ⌚`)
                    
                }
            }
            else {
                client.sendMessage(from, 'Comando invalido, envie "ayuda" y se mostraran todos los comandos')
            }
            
        }
    })

}

module.exports = {
    startBot
}