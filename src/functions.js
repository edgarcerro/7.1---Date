'use strict'

function age(birthdate) {

    let hoy = new Date()
    let cumpleanos = new Date(birthdate);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear()
    if (cumpleanos.getMonth() < hoy.getMonth() && cumpleanos.getDay() < hoy.getDay()) {
        edad--
    }
    return edad
}

function dayName(birthdate) {
    let cumpleanos = new Date(birthdate);
    let dia = cumpleanos.getDay()

    return transformDay(dia)
}

function birthdateOnYear(birthdate, year) {
    let cumpleanos = new Date(birthdate);
    let dia = cumpleanos.getDate()
    let mes = cumpleanos.getMonth()
    let proximoCumple = new Date(year, mes, dia)
    let diaProxCumple = proximoCumple.getDay()

    return transformDay(diaProxCumple)
}

function nextBirthdate(birthdate) {
    let hoy = new Date()
    let cumpleanos = new Date(birthdate)

    let mes = cumpleanos.getMonth()
    let dia = cumpleanos.getDate()
    let proxAño
    if (hoy.getMonth() > mes) {
        proxAño = hoy.getFullYear() + 1
    } else {
        proxAño = hoy.getFullYear()
    }
    let fechaProx = new Date(proxAño, mes, dia)

    return transformDay(fechaProx.getDay())
}

function diaCon100Años(birthdate, edad) {
    let hoy = new Date()
    let cumpleanos = new Date(birthdate)

    var mes = hoy.getMonth() - cumpleanos.getMonth()

    let diferenciaEdad = 100 - edad
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        diferenciaEdad--
    }
    cumpleanos.setFullYear(diferenciaEdad + hoy.getFullYear())

    return transformDay(cumpleanos.getDay())
}

function yearsWithBirthdateOnDay(birthdate, maxYear, dayOfWeek) {
    let cumpleanos = new Date(birthdate)

    let años = [];
    let añoHoy = new Date().getFullYear();
    for (let i = añoHoy; i <= maxYear; i++) {
        cumpleanos.setFullYear(i);
        if (cumpleanos.getDay() === dayOfWeek) {
            años.push(i);
        }
    }
    return años
}

function transformDay(dia) {
    switch (dia) {
        case 0:
            dia = "Domingo"
            break;
        case 1:
            dia = "Lunes"
            break;
        case 2:
            dia = "Martes"
            break;
        case 3:
            dia = "Miércoles"
            break;
        case 4:
            dia = "Jueves"
            break;
        case 5:
            dia = "Viernes"
            break;
        case 6:
            dia = "Sábado"
            break;
        default:
            break;
    }
    return dia
}
