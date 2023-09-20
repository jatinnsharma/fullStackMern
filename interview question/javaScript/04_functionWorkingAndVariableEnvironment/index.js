var x = 1;
a();
b();// we are calling the functions before defining them.This will work properly,as seen in Hoisting.
console.log(x);

function a(){
    var x = 10; // local scope because of separate execution context
    console.log(x);
}

function b(){
    var x =100;
    console.log(x);
}
// output:
// 10
// 100

// Execution Context
// The Global Execution Context(GEC) is created (the big box with Memory and Code subparts.)
// Also GEC is pushed into call stack Call Stack : GEC 

// In first phase of GEC (memory phase),variable x : undefined and a and b have their entire function code as value initialized
 
// In seconh phase of GEC(exection phase),when the function is called , a new local
// execution context is created. After x =1 assigned to GEC x,a() is called.
// So local EC for a is made inside code part of GEC.

// For local FEC, a totally different x variable assigned undefined(x inside a())
// in phase 1 , and in phase 2 it is assigned 10 and printed in console.log
// after printing from both GEC  and from call stack 
// call stack GEC 

// Cursor goes back to b() function call.Same steps repeat.
// Call Stack [GEC,b()] -> GEC (after printing yet another totally 
// different x value as 100 in console.log)

// And finally for the value of the GEC console logged 1.
 