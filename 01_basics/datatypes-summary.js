// Primitive

// 7 types : String ,Number ,Boolean ,null ,undefined ,symbol,BigInt
const score = 100
const value = 100.2

const isLogge = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3232323232323232323n;

console.log(typeof bigNumber);

console.table([score,value,isLogge,outsideTemp,userEmail,id,anotherId]);

console.log(id === anotherId);



//Reference (Non - primitive)

//Array , objects ,functions

const heroes = ["a","b","c"]

let myobj = {
    name:"moksh",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
    
}


//----------------------------------------------

// Stack (primitive),Heap (Non-Primitive)


let myName = "Moksh"
let surname = myName
surname = "Sharma"

console.log(myName);
console.log(surname);

let user1 = {
   email: "abx@gmail.com",
   upi:"user@ybl"
}
let user2 = user1
user2.email = "moksh@gmail.com"

console.log(user1.email);
console.log(user2.email);




