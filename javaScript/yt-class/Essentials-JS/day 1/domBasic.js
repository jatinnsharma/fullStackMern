// Grab single element 
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// Grab multiply elements
const modItems = document.querySelectorAll('.item');
const colItems = document.getElementsByClassName('.item'); 
// console.log(document.getElementsByTagName('li'))

// modeItems.forEach(items => console.log(items))
// colItems.forEach(items => console.log(items))
for(let i = 0;i<colItems.length;i++){
    console.log(colItems[i]);
}