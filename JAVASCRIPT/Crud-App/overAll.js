function createRandomId(){
return Date.now().toString(36) +  Math.random().toString(36).substr(2,8);
}
function handelSubmit(event){
  event.preventDefault()
   let firstName = document.getElementById('firstName').value;
   let lastName = document.getElementById('lastName').value;
   let userName = document.getElementById('userName').value;
   let emailAddress = document.getElementById('emailAddress').value;
   let mobile = document.getElementById('mobile').value;
   let gender = document.getElementById('gender').value;
   let password = document.getElementById('password').value;
   
   let allData = JSON.parse(localStorage.getItem('records')) || [];

   if(!firstName || !lastName || !userName || !emailAddress || !mobile || !gender || !password){
   return alert("All Fields are Required")
   }
   let compareEmail = allData.some((value)=> value.email === emailAddress );
   console.log(compareEmail)
   if(compareEmail){
   return alert('Email Id is already Registered')
   }
    let compareMobile = allData.some((value)=> value.mobile === mobile );
   console.log(compareMobile)
   
   

   
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
    location.replace("./index.html");
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
                  <button onclick={handelEdit('${value.email}')} > Edit</button> 
                  <button onclick={handelDelete('${value.email}')}  > Delete</button> 
                  </td>
                    </tr>
                    `
    })
    printData.innerHTML = showData.join("")
}


function handelDelete(email){
// console.log('email', email);
let allData = JSON.parse(localStorage.getItem('records')) || [];

// Delete by index
// if(!index){
//    return alert('Index is Required')
// }
// debugger
// if(index !== -1){
//     allData.splice(index,1)
//     localStorage.setItem("records",JSON.stringify(allData));
//     location.reload()
// }

// find index by email
if(!email){
   return alert('Email is Required')
};

// const selectedIndex = allData.findIndex((value)=> value.email === email )
// console.log(selectedIndex, 'ind');

// allData.splice(selectedIndex,1);
debugger
const filterData = allData.filter((value)=> value.email !== email );
localStorage.setItem("records",JSON.stringify(filterData));
location.reload()
}

function handelEdit(email){
  
  console.log(email)
  let allData = JSON.parse(localStorage.getItem('records')) || [];
  const getData = allData.find((value)=> value.email === email );
  const {firstName, lastName, email:userEmail, gender, mobile, password, userName} = getData;
  console.log(getData);
  document.getElementById('firstName').value = firstName
  document.getElementById('lastName').value = lastName
  document.getElementById('userName').value = userName
  document.getElementById('emailAddress').value = userEmail
  document.getElementById('mobile').value = mobile
  document.getElementById('gender').value = gender
  document.getElementById('password').value = password

  localStorage.setItem("userEmail",userEmail)
}

function handelUpdate(event){
  event.preventDefault()
   let firstName = document.getElementById('firstName').value;
   let lastName = document.getElementById('lastName').value;
   let userName = document.getElementById('userName').value;
   let emailAddress = document.getElementById('emailAddress').value;
   let mobile = document.getElementById('mobile').value;
   let gender = document.getElementById('gender').value;
   let password = document.getElementById('password').value;
   
   let allData = JSON.parse(localStorage.getItem('records')) || [];
   let userEmail = localStorage.getItem('userEmail');
   console.log('userrrr',userEmail)

   let getTheIndex = allData.findIndex((item)=> item.email === userEmail);
   console.log(getTheIndex)

   if(userEmail !== emailAddress ){
   let checkDuplicateEmail = allData.some((value)=> value.email === emailAddress )
   if(checkDuplicateEmail){
     return alert('Unique email required')
   }   
   }
debugger
   allData[getTheIndex].firstName =firstName;
   allData[getTheIndex].lastName =lastName;
   allData[getTheIndex].userName =userName;
   allData[getTheIndex].email =emailAddress;
   allData[getTheIndex].password =password;
   allData[getTheIndex].gender =gender;
   allData[getTheIndex].mobile =mobile;

   localStorage.setItem('records', JSON.stringify(allData));
}
showMyData()

function showForm(){
  const showTheForm = document.getElementById('my-form');
  showTheForm.style.display="block"
  const tableHide = document.getElementById('table-data');
  tableHide.style.display="none"
}


