const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const btnEl = document.getElementById("btn-el")
let inputy = document.getElementById("input-el")
btnEl.addEventListener("click", function(){
    let inputX = inputy.value
    let mTof = inputX * 3.28
    let fToM = inputX * 0.30
    let lTog = inputX * 0.26
    let gTol = inputX * 3.78
    let pTok = inputX * 0.45
    let kTop = inputX * 2.20  
    length.textContent = `${inputX} meters = ${mTof} Feets | ${inputX} Feets = ${fToM} Meters`
    volume.textContent = `${inputX} liters = ${lTog} gallons | ${inputX} gallons = ${gTol} liters`
    mass.textContent = `${inputX} pounds = ${pTok} kilograms | ${inputX} kilograms = ${kTop} pounds`
})
     
