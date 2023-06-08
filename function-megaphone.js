// megaphone
//objective
// 1. create a function that converts a string to uppercase
//
// sample
// megaphone ('hellow world') => " HELLO WORLD"

// 1. function declaration
function getMegaphone (message){
const outPutSound = message.toUpperCase();
return outPutSound;
}

// 2. function invocation
const message= getMegaphone("my head hurt");

//3. console.log
console.log(message);

function getWhisper (yay){
const outputWhisper = yay.toLowerCase();
return outputWhisper;
}

const yay= getWhisper("YAYYYY");
console.log(yay);