const taskFormat = (originalBody, hour) =>{
    return originalBody.toLowerCase().replace('recordame', '').replace(originalBody.split(' ')[1], '').replace('a las', '').replace('a la', '').replace(hour, '')
}

module.exports = {
    taskFormat
}