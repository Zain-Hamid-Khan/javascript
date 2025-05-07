let a = 3
const b = 2
const c = 4

if (true) {
    let a = 52
    const b = 66
    const c = 88
    d = 22
    console.log("Inner C: ", c);
}

console.log("Outer c: ", c);
console.log("Outer d: ", d);

