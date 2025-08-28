const excessId = document.getElementById('myId');
    excessId.innerText = "<p> Hiiii </p>"
console.log(excessId)

const addClass = document.getElementById('para');
addClass.classList.add('newcLASS', "multiple")
addClass.innerText=" Heloooo guyss";
addClass.style.backgroundColor = "gray"
addClass.classList.remove('multiple')
addClass.setAttribute('href','src')
// addClass.remove()
console.log(addClass);


const getDivData = document.getElementById('divide');

let myTag = document.createElement('p');
myTag.innerText='Hello from paragraph';

getDivData.appendChild(myTag)



console.log(getDivData,myTag)


const paragraph = document.getElementById('paragraph')


let addElement = document.createElement('h1');

addElement.innerText ='My name is deepak';
addElement.style.color = 'red'

paragraph.appendChild(addElement);

let excessPre = document.querySelector('#hey');
excessPre.innerText = 'hellloooooo'


console.log(excessPre);

const accessByClass = document.querySelectorAll('.heading');

console.log(accessByClass)

const accessList = document.querySelectorAll('#listing li')

console.log(accessList)

function hello(){
    console.log('print hello');
}

const buttonValue = document.getElementById('clickMe');

buttonValue.addEventListener("dblclick",()=>{
    console.log('i am the function fromjavascript');
})

buttonValue.addEventListener("dblclick", function(){
    console.log('i am listening to the old function')
})


