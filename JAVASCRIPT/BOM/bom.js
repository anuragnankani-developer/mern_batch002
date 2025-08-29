// console.log('bom');

// const inner_height = window.innerHeight;

// console.log(inner_height)

// const outer_height = window.outerHeight;

// console.log('outer:',outer_height);

// const inner_width = window.innerWidth;

// console.log(inner_width);

// const outer_width = window.outerWidth;
// console.log('outer width:', outer_width);

// function checkHeightWidth(){
//     console.clear()
//     let innerHeight = window.innerHeight;
//     console.log('innerHeight', innerHeight)

// }

function openNewWindow(){
   openWindow =  window.open("","","width=500px, height=400px, left=500px, top=100px")
}

var openWindow;

function closeWindow1(){
openWindow.close();
}


function newWindow(){
    mywindow= window.open("","","width=500px, height=400px, left=500px, top=100px")
}
// Close()
  var mywindow;
function closeWindow(){
    mywindow.close();
}

var myNewWindowTab;
function openNewTab(){
    myNewWindowTab= window.open("","","width=200px, height=200px, left=200px, top=100px")
   myNewWindowTab.document.write('hello from old window')
}

function moveWindow(){
    myNewWindowTab.resizeBy(400,400) //left and top
}

function scrollWindow(){
            window.scrollBy(100,0) // two parameters x-axis and y-axis
        }

        let a = 10;
        function redirectFunction(){
            if( a == 10){
// window.location.href=""
location.assign('./index.html')
            }else{
                alert('Value doesnt match')
            }
            
        }





