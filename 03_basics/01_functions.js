function sayMyName(){
    console.log("HEISENBERG");
    
}

// sayMyName()

// function addTwo(num1,num2){  // parameters
//     console.log(num1+num2);
    
// }
// addTwo(1,null)  //arguments


function addTwo(num1,num2){  // parameters
//    const ans = num1+num2
//    return ans
    return num1+num2
}

const sum = addTwo(4,8)
// console.log(sum);


function loginUserMessage(username){
    if(!username){
        return "plz enter username"
    
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,3000,555,6859));


const user = {
    userName:"moksh",
    price:2112
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

// handleObject(user)
// handleObject({
//     userName:"sam",
//     price:999
// })

const myNewArray = [1000,200,30,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));


