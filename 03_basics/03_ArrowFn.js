const user = {
    username:"moksh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this); //current context is empty 


// function chai() {
//     let username = "moksh"
//     console.log(this.username);
    
// }

// chai()


// const chai = () =>{
//     let username = "moksh"
//     console.log(this);
    
// }

// chai()



// const addTwo = (num1,num2) => {
//     return num1+num2
// }


// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)


const addTwo = (num1,num2) => ({username:"hitesh"})

console.log(addTwo(5,8));


