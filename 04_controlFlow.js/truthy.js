const username = "ghg"
if(username) console.log("yes");
else console.log("No");

// falsy values

// false , 0 , -0 , BigInt 0n ,"" ,null , undefined ,NaN

// truthy value
// "0" , 'false' , " " , [] , {} , function(){}



if(username.length===0){
    console.log("Array is empty");
    
}


const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}


// flase == 0 true
// flase == '' true
// 0 == '' true


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10

// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

// val1=null
// val1=undefined
// if(val1==null || val1==undefined) val1=10;
 


console.log(val1);
