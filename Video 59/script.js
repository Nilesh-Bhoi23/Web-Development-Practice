let random = Math.random()

let a = prompt("Entere first Number:");
let c = prompt("Entere operation:");
let b = prompt("Entere Second Number:");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(random > 0.1) {
// perfect correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // perfect wrong operation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}