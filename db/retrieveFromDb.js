const { db } = require("./firebaseConfig")

const retrieveFromDb = async (date, hour) =>{
    try {
        let allData = []
        const snap = await db.collection('reminders').where('day', '==', date).where('hour','==',hour).get()
        snap.forEach(element => {
            const eachReminder = {
                id: element.id,
                ...element.data()
            }
            console.log(eachReminder)
            allData.push(eachReminder)
        });
        return allData
       
    } catch (error) {
        console.log(error)
        return null
    }
}

module.exports={
    retrieveFromDb
}