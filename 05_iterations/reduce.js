const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval

// },0)
// console.log(myTotal);


// const myTotal = myNums.reduce((accumulator,currval)=>(accumulator+currval),0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemname:"java course",
        price:2500
    },
    {
        itemname:"js course",
        price:250
    },
    {
        itemname:"web dev course",
        price:25000
    },
    {
        itemname:"python course",
        price:900
    },
]

const total = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);
