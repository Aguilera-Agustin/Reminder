const { dayValidation } = require("../helpers/dayValidation")

const validateMessage = (message,from, client)=>{
    if(message.toLowerCase()==='ayuda'){
        const txt = `⏰ Bot recordatorio - Version pre-alfa
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Para crear un recordatorio, debe enviar un mensaje diciendo:
        "Recordame mañana comprar pan a las 11:30pm"
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Los dias disponibles de momento son "hoy", "mañana", "pasado". Pronto serán todos los dias por fecha
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Para mas ejemplos, escriba "ejemplos"
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Programa creado por Agustín Aguilera`
        client.sendMessage(from, txt)
        return false
    }
    if(message.toLowerCase()==='ejemplos'){
        const txt = `⏰ Bot recordatorio - Version pre-alfa
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Ejemplos
        Recordame hoy apagar las luces a las 16:00
        Recordame mañana prender las luces a las 08:00pm
        Recordame pasado trabajar a las 09:00am
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Los dias disponibles de momento son "hoy", "mañana", "pasado". Pronto serán todos los dias por fecha
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Programa creado por Agustín Aguilera`
        client.sendMessage(from, txt)
        return false
    }
    if(message.toLowerCase().includes('recordame') || message.toLowerCase().includes('recuérdame') || message.toLowerCase().includes('recuerdame')){
        return true
    }
    const txt = `⏰ Estas perdido? Podes escribir "ayuda" o "ejemplos" para guiarte! 😺`
    client.sendMessage(from, txt)
    return false
}

const isCorrectData = (message, from, client) => {
    if(( !dayValidation(message.split(' ')[1]) && !dayValidation(message.split(' ')[2] ))){
        const txt = `🤌🏻 Dia inválido
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        ⏰ Estas perdido? Podes escribir "ayuda" o "ejemplos" para guiarte! 😺
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Programa creado por Agustín Aguilera`
        client.sendMessage(from, txt)
        return false
    }

    if(! message.includes('a las') || ! message.includes('a la')){
        const txt = `🐱 Te faltó la hora
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        ⏰ Estas perdido? Podes escribir "ayuda" o "ejemplos" para guiarte! 😺
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Programa creado por Agustín Aguilera`
        client.sendMessage(from, txt)

        return false
    }
    return true
}

const isValidDate = (finalDate, from , client) => {
    console.log('VALID DATE!!!')
    console.log(moment(finalDate, 'DD/MM/YYYY-HH:mm:ss'))
    if(moment(finalDate) < moment()){
        const txt = `🐱 Hey! esa hora ya pasó
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        ⏰ Estas perdido? Podes escribir "ayuda" o "ejemplos" para guiarte! 😺
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        Programa creado por Agustín Aguilera`
        client.sendMessage(from, txt)
        return false
    }
    else{
        return true
    }
}

module.exports={
    validateMessage,
    isCorrectData,
    isValidDate
}