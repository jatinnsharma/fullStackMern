const fs=require('fs')
const path = require('path')

const dirpath=path.join(__dirname,'file');

const filename=`${dirpath}/home.txt`;

fs.writeFileSync(filename,'this is a home page',()=>{
    console.log(succese);
})
const ziatxt = `${dirpath}/zia.txt`;
fs.rename(filename,ziatxt,()=>{
    console.log('done')
})