let myHeading=document.querySelector('h1');
let  myImage = document.querySelector('img');

myImage.onclick=function() {
    let mySrc=myImage.getAttribute('src')
    if(mySrc==="https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg"){
        myImage.setAttribute( "src","https://img95.699pic.com/photo/40100/6015.jpg_wh300.jpg");
    }else{
        myImage.setAttribute("src","https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg");
    }
}
let myButton=document.querySelector("button");
function setUserName(){
    let maName =prompt("Please input your name");
    localStorage.setItem("name",maName);
    myHeading.textContent="The picture is awsome !"+maName;
}
if (! localStorage.getItem("name")) {
    setUserName;
} else {    
    let storedName =localStorage.getItem("name");

    myHeading.textContent="The picture is awsome !"+maName;
}
myButton.onclick =function(){
    setUserName();
}
