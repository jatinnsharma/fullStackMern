let arr = [2,4];
let [a,b] = arr;
// No need to do this : 
// let a = arr[0]
// let b = arr[1]
console.log(a,b)


let arr1 = [12,4,5,1,12]
let [x,y,z,...rest] = arr1;
console.log(...rest)