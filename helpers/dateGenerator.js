const moment = require("moment")

const dateGenerator = (day, hour) =>{
    let finalDate = null
    let finalHour = null
    if(hour.includes('am')?'AM':'PM'){
        const ampm = hour.includes('am')?'AM':'PM'
        const myHour = hour.toLocaleLowerCase().split(ampm.toLocaleLowerCase())[0]
        finalHour = moment(`${myHour} ${ampm}`, ["h:mm A"]).format("HH:mm")
    }
    else{
        finalHour=hour
    }

    const myDate = moment().set({'hour': finalHour.split(':')[0], 'minute':finalHour.split(':')[1], 'second': '0'})  
    
    if(day==='hoy'){
        finalDate = moment(myDate).format('DD/MM/YYYY-HH:mm:ss')
        return finalDate;  
    }
    
    if(day==='mañana'){
        finalDate = moment(myDate.add(1, 'days')).format('DD/MM/YYYY-HH:mm:ss')
        console.log(finalDate)
        return finalDate;  
    }
    
    if(day==='pasado' || day==='pasado mañana'){
        finalDate = moment(myDate).add(2, 'days').format('DD/MM/YYYY-HH:mm:ss')
        return finalDate;  
    }

}

module.exports ={
    dateGenerator
}