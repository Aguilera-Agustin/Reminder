const dayValidation = (possibleDay) => {
    const days = ['hoy', 'mañana', 'pasado', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
    return days.includes(possibleDay.toLowerCase())
}

module.exports = {
    dayValidation
}