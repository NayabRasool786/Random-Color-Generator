let btn=document.querySelector("button");
let h3=document.querySelector("h3");
let div=document.querySelector("div");


btn.addEventListener("click",function() {
    console.log("Generate Random COLOR");
    h3.innerText=getRandomColor();
    console.log("Color Updated");
    div.style.backgroundColor=getRandomColor();
    div.innerHTML="<b>This Is Your Generated Color<b/>";
    
}); 

function getRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return "rgb("+r+","+g+","+b+")";
}  