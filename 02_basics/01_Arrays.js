const myArr = [0, 10, 20, 30, 40, 50 ]
const myFav = ["Mother" , "Father" , "Brother"]
const myArr2 = new Array(1,2,3,4,5)

//console.log(myArr2[3]);


//Methods

//myArr.push(6)
//console.log(myArr);
//myArr.pop(3)
//console.log(myArr);

//myArr.unshift(9)
//console.log(myArr);
//myArr.shift(8)
//console.log(myArr);


//console.log(myArr.indexOf(3));
//console.log(myArr.includes(2));

//slice, splice

//console.log("A ", myArr);
//console.log(myArr.slice(2,3));

//console.log("B ",  myArr.splice(2,3))

let arr1 = ["Hello1", "Hello2", "Hello3"]
let arr2 = ["bye1", "bye2", "bye3"]

//rr1.push(arr2)

//console.log(arr1);

let arr3 = arr1.concat(arr2)

console.log(arr3);

let arr4 = [...arr1 ,...arr2]

console.log(arr4);


console.log(Array.isArray(4567891022));
console.log(Array.from("4567891022"));

let key1 = "hello"
let key2 = "Zain"
let key3 = "World"

console.log(Array.of(key1, key2 , key3));




