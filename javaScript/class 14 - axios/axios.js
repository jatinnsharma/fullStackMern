document.getElementById('btn').addEventListener('click',makeRequest);

function makeRequest(){
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
        console.log(res.data);
        console.log('button clicked')
        let printData = "";
        res.data.map(element=>{
            printData+=`
            <div>${element.title}</div>
            `
        })
        document.getElementById('box').innerHTML = printData;

    })
    .catch((err)=>console.log(err))
    
}