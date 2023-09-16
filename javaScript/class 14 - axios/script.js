document.getElementById('btn').addEventListener('click',hander)



function hander(){

    axios('https://fakestoreapi.com/products')
    .then((res)=>{
        let printData = ''
        res.data.forEach((elements)=>{
           printData+=`<div>${elements.price}</div>` 
        })


        document.getElementById('container').innerHTML=printData
    
    }).catch((err)=>console.log(err))
}