let clockDs = document.getElementById("count-el")
let clockDs1 = document.getElementById("count1-el")
let count = 0
let count1 = 0

function addOne() {
    let result = count += 1
    clockDs.textContent = result
}

function addTwo() {
    let result = count += 2
    clockDs.textContent = result
}

function addThree() {
    let result = count += 3
    clockDs.textContent = result
}

function add1() {
    let result = count1 += 1
    clockDs1.textContent = result
}

function add2() {
    let result = count1 += 2
    clockDs1.textContent = result
}

function add3() {
    let result = count1 += 3
    clockDs1.textContent = result
}