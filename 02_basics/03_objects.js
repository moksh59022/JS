// singleton
// Object.create constructor method 

// object literals

const mySym = Symbol("Key1")


const juser = {
    name : "moksh",
    "full name":"Moksh Sharma",
    [mySym]:"mykey1",
    age:18,
    location:"hp",
    email:"moksh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(juser.email);
// console.log(juser["email"]);
// console.log(juser["full name"]);

// console.log(typeof juser[mySym]);


juser.email = "moksh55666@gmail.com"
// Object.freeze(juser)
juser.email = "hjhjhguijfty@jhikjl"
// console.log(juser["email"]);
// console.log(juser);


juser.greeting = function(){
    console.log("hello juser");
    
}


juser.greeting2 = function(){
    console.log(`hello juser ,${this.name}`);
    
}
console.log(juser);

console.log(juser.greeting());
console.log(juser.greeting2());
