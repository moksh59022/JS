// var c = 300
let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     //  c = 30
//     console.log("inner a is :",a)     
// }


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    let username = "moksh"

    function two(){
        let website = "amazon"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}

// one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);


//------------------interesting---------------------

console.log(addone(5))
function addone(num){
    return num+1
}

// console.log(add(5)) error
const add = function(num){
    return num+1
}

console.log(add(5))