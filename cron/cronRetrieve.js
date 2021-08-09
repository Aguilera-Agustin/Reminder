const { retrieveFromDb } = require('../db/retrieveFromDb');
const moment = require("moment");
const { deleteFromDb } = require('../db/deleteFromDb');

const startCron = (client) =>{
    console.log("CRON INITIALIZED")
    const cron = require('node-cron');
    cron.schedule('* * * * *', ()=>cronAction(client))
}

const cronAction = async(client) =>{
    console.log("CRON executed")
    const dateNow = moment().format('DD/MM/YYYY')
    const hourNow = moment().format('HH:mm:00')
    try {
        const data = await retrieveFromDb(dateNow, hourNow)
        console.log({info: data})
        if(data || data.length>0){
            await data.forEach(element => {
                client.sendMessage(element.number, `⏰ Recordatorio - ${element.task}`)
                deleteFromDb(element)
            });
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    startCron
}