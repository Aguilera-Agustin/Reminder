const { db } = require("./firebaseConfig")

const deleteFromDb = (data) =>{
    let success = false
    db.collection('reminders').doc(data.id).delete().then(()=>{
        success = true
    })
    .catch(err=>console.log(error))
    return success
}

module.exports={
    deleteFromDb
}