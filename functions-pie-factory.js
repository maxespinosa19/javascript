// Pie Factory
// create a function that makes pies
// repeat the string as much as the quantity of the order
//
// sample
//const result= makepie(10);
//result =🥧🥧🥧🥧🥧🥧🥧🥧🥧

//1. FUNCTION declaration
function makePie(quantity=10){
    const pieOrder = '🥧'.repeat(quantity);
    return pieOrder;
}
//2. function invocation
const result = makePie(10);
console.log(result);
