document.getElementById('employeeBtn').addEventListener('click',handler);

function handler(){
    const xhr = new XMLHttpRequest();
    const url = 'https://hub.dummyapis.com/employee' 

    // console.log('button clicked')
    
    xhr.open('GET',url,true)


    //USE THIS FOR POST REQUEST
    // xhr.open('POST',url,true);
    // xhr.getResponseHeader('Content-type','application/json')


    // Old method 
    // xhr.onreadystatechange = function(){
    //     if(this.readyState == 4 && this.status==200){
    //         console.log('ready state is ',xhr.readyState)
    //     }
    // }

    // What to do on progress (optional)
    // xhr.onprogress=function(){
    //     console.log('On progress');
    // }


    // new method
    xhr.onload = function(){
        if(this.status==200){
            // This data cannot render becuse it is not in the form JSON
            // const completeData =  this.responseText;
            // Here convert the data into JSON using JSON.parse()
            const completeDataInJson =  JSON.parse(this.responseText);
           
          const html =  completeDataInJson.map((item)=>{
                return `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.email}</td>
                        <td>${item.contactNumber}</td>
                    </tr>
                `
            })
            document.getElementById('data').innerHTML=html
            
        }else{
            console.log('Some error occured');
        }
    }
    
    // send the request
    // params = `{
    //     "id": 1001,
    //     "imageUrl": "https://hub.dummyapis.com/Image?text=BR&height=120&width=120",
    //     "firstName": "Braulio",
    //     "lastName": "Rath",
    //     "email": "Braulio.Rath@dummyapis.com",
    //     "contactNumber": "4982999083",
    //     "age": 70,
    //     "dob": "30/03/1953",
    //     "salary": 1.0,
    //     "address": "Address1"
    //   }`

    // xhr.send(params);
    xhr.send()
}

document.getElementById('userBtn').addEventListener('click',userBtnHandler);


function userBtnHandler(){
    let xhr = new XMLHttpRequest();
    
    const url = 'https://fakestoreapi.com/users'
    xhr.open('GET',url,true);
    
    xhr.onload = function(){
        if(this.status == 200){
            let completeData = JSON.parse(this.responseText);

          const html = completeData.map((item)=>{
            return `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name.firstname}</td>
                    <td>${item.name.lastname}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                </tr>
            `
          })
          document.getElementById('data').innerHTML = html
        }
    }
    xhr.send()
}


document.getElementById('clearBtn').addEventListener('click',clearHandler);


function clearHandler(){
    document.getElementById('data').innerHTML=" ";
}