// map , filter and reduce 
// -----------------------------
// what is map() ? 
// So the map method is used for creating a new 
// array from existing one by applying a function to 
// each one of the elements of the first array 

// example 

const nums = [1,2,3,4];

const multiplyThree = nums.map((num,i,arr)=>{
    return num*3+i;
})

console.log(multiplyThree)

// map takes a callback function so we are going to provide 
// a function over here.
// this function takes three things 
// first is current element : its going to iterate through all of 
// these elements 
// second is index 
// third is array 


// Filter method 
// -------------------
// Filter method takes each element in an array and it applies 
// a conditional statement against it if the conditional return 
// true the element gets pushed into the output array 
//  and if the condition gets the false element doesnot 
//  push into the array 


const moreThanTwo = nums.filter((num)=>{
    return num>2;
})

console.log(moreThanTwo);


// reduce method
// ---------------------
// the reduce method reduces an array of values down to just one value 
// just like filter and reduces also executes the callback
// for each element of the array 
// so it receives two things 

const sum = nums.reduce((accumulator,currentValue,index,array)=>{
    return accumulator+currentValue;
})

console.log(sum)


// reduce have callback and initial values 
// callback function takes four things 
// accumulator ,current value ,index and our array
// accumulator : result of the previous computation 
//  current value is the current element of the array 
//  index 
//  array











