// for of

//["","",""]
//[{},{},{}]


const arr = [1,2,3,4,5]

for (const ele of arr) {
    console.log(ele);   
}

const greet = "hello world"

for(let g of greet){
    console.log(g);
    
}


// Maps

const map = new Map()
map.set('In',"India")
map.set('In1',"India")
map.set('In2',"India")
map.set('In',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key ,':-',value);
    
}

const object = {
    game1:'NFS',
    game2:'Spiderman'
}

// cannot iterate
// for (const [key,value] of object) {
//     console.log(key ,':-',value);
    
// }