// let myName ="moksh   "

// console.log(myName.trueLength);


 let myHeroes = ["thor","spiderman"]


 let heroPower = {
    thor:"hammer",
    spideran:"sling",

    getSpiderPower:function(){
        console.log(`Spidy poer is  ${this.spiderman}`);
        
    }

 }

 Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
    
 }


Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`);
    
}


//  heroPower.hitesh()

// myHeroes.hitesh()
// myHeroes.heyHitesh();
// heroPower.heyHitesh()



// Inheritance

const User = {
    name:"chai",
    email:"chai@google.com",
}



const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}


Teacher.__proto__= User


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength=function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()

"moksh".trueLength()
"iceTea".trueLength()