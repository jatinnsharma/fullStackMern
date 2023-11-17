const fs = require('fs')

// fs.readFile('app.txt',(err,data)=>{
//     console.log(err,data)
// })

// fs.writeFile('jatin1.txt','My name is jatin sharma',()=>{
//     console.log('you sccessfull write a file')
// })

fs.open('app.txt','w',()=>{
    console.log('saved');
})      