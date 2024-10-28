// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`db connected`);
    
})();

( (name) => {
     console.log(`db connected to ${name}`);
})("moksh");