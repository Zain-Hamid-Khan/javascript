const user = {}

user.id = 123,
user.name =  "Zain",

console.log(user);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c" , 4: "d"}

let obj3 = {obj1, obj2}
console.log(obj3);

let obj4 = Object.assign({}, obj1 ,obj2)
console.log(obj3);

let obj5 = {...obj1, ...obj2}
console.log(obj5);


console.log(Object.keys(user));
console.log(Object.values(user));

const Hello = {
    name: "khan",
    age: 24
}

const {age: why} = Hello

console.log(why);
