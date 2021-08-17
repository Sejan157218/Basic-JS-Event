function makeRed(){
    document.body.style.backgroundColor = "red";
}
// handle blue button by setting function name
let clickMakeBlue = document.getElementById('click-blue');
console.log(clickMakeBlue);
// just set the name of function
clickMakeBlue.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// anonymous function
let yellowButton = document.getElementById('click-yellow');
        yellowButton.onclick = function(){
            document.body.style.backgroundColor = "yellow";
        }



// handle by addEventListener
let goldenrod = document.getElementById('click-goldenrod');
goldenrod.addEventListener('click',goldenrodbutton)
function goldenrodbutton(){
    document.body.style.backgroundColor = "goldenrod";
}

//addEventListener
let blue = document.getElementById('click-black');
blue.addEventListener('click',function(){
    document.body.style.backgroundColor = "black";
})
//direct shortcut
let IndianRed = document.getElementById('click-indianred').addEventListener('click',function(){
    document.body.style.backgroundColor = "indianred";
})
