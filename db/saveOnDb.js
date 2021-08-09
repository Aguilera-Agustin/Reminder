const { db } = require("./firebaseConfig")

const saveOnDb = (data) =>{
    try {
        db.collection('reminders').add(data)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    saveOnDb
}