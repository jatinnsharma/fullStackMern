// Episode 2 : code context 

// When a JS program is ran, a Global Execution Context(GEC) is created.

// The execution context is created in two phases. 
// 1. creation phase/memory creation phase
// 2. code execution phase 

// In the first phase (memory creation),JS will allocate memory to 
// variables and functions.

// example : 

//     var n = 2;
//     function square(num){
//         var ans = num*num;
//         return ans;
//     }
//     var square2 = square(n);
//     var square4 = square(4);

// 1. Memory Creation Phase
// The very first thing which JS does is Memory creation phase,so 
// it goes to line one of above code snippet,and allocates a Memory
// space for variable 'n' and then goes to line two,and allocates a memory space for function 'square'.

// -> When allocating memory for n it stores 'undefined',a special value for 'n'
// -> for 'square' , it stores the whole code of the function inside its memory sqace. 
// -> Then as square2 and square4 are variables as well,it allocates memory and stores 
//'undefined' for them , and this is the end of first phase i.e , memory creation phase.
// So the memory be like


// Memory Component                      Code Component
// n : undefined    square:{...}
// square2:undefined square4:undefined

// 2. Code Execution Phase
// -> Now,in 2nd phase i.e. code execution phase, it starts going throught the whole code line by line 
// As it encounters var n = 2, it assigns 2 to 'n'.
//  Until now,the value of 'n' was undefined.

// For function,there is nothing to execute.As these lines were already deal
// with in memory creation phase 
// Comming to line 6 i.e , var square2 = square(n), here functions 
// are a bit different than any other language . A new 
// execution context is created altogether.


// Again in this new execution context, in memory creation phase 
// we allocate memory to num and ans the two variables.and 
// undefined is placed in them. Now, in code execution 
// phase of this execution context, first 2 is assigned to num. 
// Then var ans = num * num will store 4 in ans.



// After that, return ans returns the control of program back to where 
// this function was invoked from.
// So the memory be like 

// Memory                           Code component
// n:2                          Memory          Code 
// square:{...}                 num:2           return 4
// square2: undefined           ans:4
// square4:undefined 


// When return keyword is encountered, it returns the control to the called line
// and also the function executed context is deleted. Same thing will be repeated
// for square4 and then after that is finished , the global execution context
// will be destroyed. so , the final diagram 
// before deletion would look something like:

// n:2                          Memory          Code 
// square:{...}                 num:4           return 16
// square2: 4                   ans:16
// square4:16 

// JavaScript manages code exection context creation adn deletion with the help of call stack.
// Call stack is a mechanism to keep track of its place in script that calls multiple function.
// Call stack maintains the order of execution of execution contexts. It is also known as
// program Stack,
// Control Stack,
// Runtime Stack,
// Machine Stack,
// Execution context Stack,


// -> Call stack
// ---------
// 
// ---------
// GEC
// ---------
// When program starts executing the Global execution Context(GEC)
// is created and pushed into the call stack



// ---------
// 
// ---------
// FEC
// ---------
// GEC
// ---------
// When function starts executing is function Execution stack (FEC)
// is created and pushed into the call stack.After returning 
// value that is also deleted from the call stack for both the function calls.

//  After executing program GEC will also be deleted from the stack and Call stack 
// will be empty.
