// getName();// Namaste JavaScript
// console.log(x) // undefined
// var x = 7;
// function getName(){
//     console.log('Namaste JavaScript');
// }

// It should have been an outright errr in many other languages ,as 
//it no possible to even access something which is not even
// created (defined) yet but in JS, we know that in memory
// creation phase it assigns undefined and puts the content 
// of function to function's memory.

// -> And in execution, it then executes whatever is asked. Here,as 
// execution goes line by line and not after compiling, it could only 
// print undefined and nothing else.
// This phenomeon,is not an error.However,if we remove var x = 7;
// then it give error. 
// uncaught Refernce Error : x is not defined 

// getName() // Namaste JavaScript
// console.log(x) // Uncaught referecne : x is not defined.
// console.log(getName); // f getName(){console.log('Namaste JavaScript)}
// function getName(){
//     console.log("Namaste JavaScript");
// }

// Hoisting is a concept which enables us to extract values of variables and 
// functions even before initialising/assiging value without 
// getting error and this is happening due to the 1st phase 
// (memory creation phase) of the execution Context.

// -> So,in previous lecture , we learnt that execution context gets created 
// in two phase, so even before code execution, memory is created so in 
// case of variable, it will be initailized as undefined while case of 
// function the whole function code in placed in the memory

// Example :
// getName();// Uncaught TypeError : getName is not a function 
// console.log(getName);

// var getName = function(){
//     console.log('Namaste JavaScript');
// }

// The code won't execute as the first line itself throws as

// Arrow operator
// -----------------
// getName();// Uncaught TypeError : getName is not a function 
// console.log(getName);

// var getName = ()=>{
//     console.log('Namaste JavaScript');
// }

// The code won't execute as the first line itself throws as