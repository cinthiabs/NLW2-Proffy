const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Fisica",
    "Física",
    "Geografia",
    "Programação",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position =  +subjectNumber -1
    return subjects[position]
}

function converHoursToMinutes(time){
    const [hour, minutes] = time.split(":")[0]
    return Number((hour*60)+minutes)
    
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    converHoursToMinutes
}