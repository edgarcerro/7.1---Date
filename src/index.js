'use strict'
let parrafos = document.getElementById("msgs")

document.getElementById("formBtn").addEventListener("click", function (event) {
    event.preventDefault()
    let userInfo = document.getElementById("userDate").value

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tienes " + age(userInfo) + " años"
    parrafos.appendChild(parrafo)

    parrafo = document.createElement("p")
    parrafo.innerHTML = "Naciste un " + dayName(userInfo)
    parrafos.appendChild(parrafo)

    parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu proximo cupleaños será el dia " + nextBirthdate(userInfo)
    parrafos.appendChild(parrafo)

    parrafo = document.createElement("p")
    parrafo.innerHTML = "Cuando cumplas 100 años será " + diaCon100Años(userInfo, 100)
    parrafos.appendChild(parrafo)

    parrafo = document.createElement("p")
    parrafo.innerHTML = "En el  2000 tu cumpleaños cayó el dia " + birthdateOnYear(userInfo, 2000)
    parrafos.appendChild(parrafo)

    parrafo = document.createElement("p")
    parrafo.innerHTML = "Los años que caen ese dia son " + yearsWithBirthdateOnDay(userInfo, 2100, 1)
    parrafos.appendChild(parrafo)
})