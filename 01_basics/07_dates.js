
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myDate2 = new Date(2025 ,8 ,18, 22 ,30 ,15)
console.log(myDate2.toLocaleString());

let myDate3 = new Date()
console.log(myDate3);
console.log(myDate3.getDay());
console.log(myDate3.getMonth());

myDate3.toLocaleString("default", {
    weekday: "long"
})








