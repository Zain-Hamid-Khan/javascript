

function addTwoNumber(number1, number2){
console.log(number1 + number2);
}

//let result = addTwoNumber(3, 4)
//console.log(result);


function add(number1, number2){
    //let result = number1 + number2
    return number1 + number2
}

let result=add(2,8)

console.log(result);


function loggedInMessage(username){
    return `${username} has logged in`
}

console.log(loggedInMessage("Zain"))

function calculate(...num1)
{
    console.log(num1);
    
}

console.log(calculate(3, 5,6,7));

function isLoggedIn(username){
    if(!username)
    {
        console.log("enter valid username ");
    }
    //console.log(`${username} is logged in`)
    return `${username} is logged in`
}

console.log(isLoggedIn("Zain"));


let Arr = [1, 2, 3, 4]

function returnArray(getArray){
    return getArray[0]    
}

console.log(returnArray(Arr));


