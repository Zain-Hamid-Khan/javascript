
let sym = Symbol("key1")

const Object1 = {
    name: "zain",
    "full name": "Hitesh Chaudhary",
    age: 22,
    isMale: true,
    [sym]: "newkey1",
}

console.log(Object1["full name"]);
console.log(typeof sym);

console.log(Object[sym]);

console.log(Object1);

Object1.greeting = function()
{
    console.log(`hello user, ${this.name}`) ;
}

console.log(Object1.greeting());

