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
// As it encounters var n = 2, it assigns 2 to 'n'. Until now,the value 
// of 'n' was undefined.
// For function,there is nothing to execute.As these lines were already deal
// with in memory creation phase 
// 