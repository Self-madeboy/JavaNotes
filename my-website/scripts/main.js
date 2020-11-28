let myHeading=document.querySelector('h1');
myHeading.textContent="hello world!";
let  myImage = document.querySelector('img');

myImage.onclick=function() {
    let mySrc=myImage.getAttribute('src')
    if(mySrc==="https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg"){
        myImage.setAttribute( "src","https://img95.699pic.com/photo/40100/6015.jpg_wh300.jpg");
    }else{
        myImage.setAttribute("src","https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg");
    }
let myButton=document.querySelector("button");
function setUserName(){
    let maName
}
}