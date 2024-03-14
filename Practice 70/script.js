let e = document.querySelectorAll(".box");

document.querySelectorAll(".box").forEach(e => {
    let a = Math.random();
    if (a < 0.22) {
    e.style.backgroundColor = "red";
    e.style.color = "cyan";
    }
    else if ( a >= 0.33 && a <= 0.44 ) {
        e.style.backgroundColor = "blue";
        e.style.color = "back";
    }
    else if ( a >= 0.44 && a <= 0.55 ) {
        e.style.backgroundColor = "yellow";
        e.style.color = "black";
    }
    else if ( a >= 0.66 && a <= 0.77 ) {
        e.style.backgroundColor = "cyan";
    }
    else if ( a >= 0.88 && a <= 0.99 ) {
        e.style.backgroundColor = "pink";
    }
    else {
        e.style.backgroundColor = "black";
        e.style.color = "yellow";
    }
})



// else if (a > 0.33) and (a < 0.66) {
//     e.style.backgroundColor = "blue";
// }