
function handelSubmit(){
    

   let firstName = document.getElementById('firstName').value;
   let lastName = document.getElementById('lastName').value;
   let userName = document.getElementById('userName').value;
   let emailAddress = document.getElementById('emailAddress').value;
   let mobile = document.getElementById('mobile').value;
   let gender = document.getElementById('gender').value;
   let password = document.getElementById('password').value;
   console.log(firstName)
   debugger

  

    const obj ={
        firstName:firstName,
        lastName: lastName,
        userName: userName,
        mobile: mobile,
        gender: gender,
        email: emailAddress,
        password: password
    };
 let allData = JSON.parse(localStorage.getItem('read'));

    allData.push(obj);

    localStorage.setItem('records', JSON.stringify(allData));

}


console.log('js file');