/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEl = document.getElementById("convert-btn")
const inputEl = document.getElementById("conversion-value")
let lengthResultEl = document.getElementById("length-result")
let volumeResultEl = document.getElementById("volume-result")
let massResultEl = document.getElementById("mass-result")

buttonEl.addEventListener("click", function() {
let inputValue = (inputEl.value)
let meterConversion = inputValue * 3.281
let feetConversion = inputValue / 3.281
let literConversion = inputValue * 0.264
let gallonConversion = inputValue / 0.264
let kiloConversion = inputValue * 2.204
let poundConversion = inputValue / 2.204


if (inputValue > 0) {
    lengthResultEl.textContent = `${inputValue} meters = ${meterConversion.toFixed(3)} feet | ${inputValue} feet = ${feetConversion.toFixed(3)} meters`
    volumeResultEl.textContent = `${inputValue} liters = ${literConversion.toFixed(3)} gallons | ${inputValue} gallons = ${gallonConversion.toFixed(3)} liters`
    massResultEl.textContent = `${inputValue} kilos = ${kiloConversion.toFixed(3)} pounds | ${inputValue} pounds = ${poundConversion.toFixed(3)} kilos`
} else {
    lengthResultEl.textContent = `Please put in a value larger than 0`
    volumeResultEl.textContent = `Please put in a value larger than 0`
    massResultEl.textContent = `Please put in a value larger than 0`
}
})