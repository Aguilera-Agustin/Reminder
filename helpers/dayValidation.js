const dayValidation = (possibleDay) => {
    const days = ['hoy', 'mañana', 'pasado']
    return days.includes(possibleDay.toLowerCase())
}

module.exports = {
    dayValidation
}