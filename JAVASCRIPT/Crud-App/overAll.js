function createRandomId(){
return Date.now().toString(36) +  Math.random().toString(36).substr(2,8);
}
function handelSubmit(){
   let firstName = document.getElementById('firstName').value;
   let lastName = document.getElementById('lastName').value;
   let userName = document.getElementById('userName').value;
   let emailAddress = document.getElementById('emailAddress').value;
   let mobile = document.getElementById('mobile').value;
   let gender = document.getElementById('gender').value;
   let password = document.getElementById('password').value;
   
   let allData = JSON.parse(localStorage.getItem('records')) || [];
   let compareEmail = allData.some((value)=> value.email === emailAddress );
   console.log(compareEmail)
   
   if(compareEmail){
   return alert('Email Id is already Registered')
   }

   if(!firstName || !lastName || !userName || !emailAddress || !mobile || !gender || !password){
   return alert("All Fields are Required")
   }
     const obj ={
        id: createRandomId(),
        firstName:firstName,
        lastName: lastName,
        userName: userName,
        mobile: mobile,
        gender: gender,
        email: emailAddress,
        password: password
    };


    allData.push(obj);

    localStorage.setItem('records', JSON.stringify(allData));
   }   
console.log('js file');


function showMyData(){
    let allData = JSON.parse(localStorage.getItem('records')) || [];
    let printData = document.getElementById('tableBody');
    let showData = allData.map((value, index)=>{
                  return  `
                    <tr>
                    <td>  ${ index + 1 } </td>  
                    <td> ${value.firstName}  </td>  
                    <td> ${value.lastName}  </td>  
                    <td> ${value.userName}  </td>  
                    <td> ${value.email}  </td>  
                    <td> ${value.mobile}  </td>  
                    <td> ${value.gender}  </td>  
                    <td> ${value.password}  </td>  
                  <td>  
                  <button> Edit</button> 
                  <button onclick={handelDelete('${index}')}  > Delete</button> 
                  </td>
                    </tr>
                    `
    })
    printData.innerHTML = showData.join("")
}


function handelDelete(index){
console.log('index', index);
let allData = JSON.parse(localStorage.getItem('records')) || [];
if(!index){
   return alert('Index is Required')
}
debugger
if(index !== -1){
    allData.splice(index,1)

    localStorage.setItem("records",JSON.stringify(allData));
    location.reload()
}
}

showMyData()


