let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let tab = document.querySelector(".switchTab")
let v = document.querySelector("#v")


btn1.addEventListener("click",(e)=>{
    let position = e.target.offsetWidth * 1 
tab.style.transform = `translateX(${e.x -40}px)`;
let grandpa = document.querySelector(".sec-2");
grandpa.style.backgroundImage = 'url(./assets/bg1-mobile.jpg)';
if (window.outerWidth >= 1024 ){
    grandpa.style.backgroundImage = 'url(./assets/bg1-pc.jpg)';  
}
btn1.style.color = "White"
btn2.style.color = "black"
btn3.style.color = "black"

})
 
btn2.addEventListener("click",(e)=>{
    let position = e.target.offsetWidth * 1 
tab.style.transform = `translateX(${e.x -40}px)`;
let grandpa = document.querySelector(".sec-2");
grandpa.style.backgroundImage = 'url(./assets/bg2-mobile.jpg)';
if (window.outerWidth >= 1024 ){
    grandpa.style.backgroundImage = 'url(./assets/bg2-pc.jpg)';  
}

btn1.style.color = "black"
btn2.style.color = "White"
btn3.style.color = "black"
})
 
btn3.addEventListener("click",(e)=>{
    let position = e.target.offsetWidth * 1 
tab.style.transform = `translateX(${e.x -40}px)`;
let grandpa = document.querySelector(".sec-2");
grandpa.style.backgroundImage = 'url(./assets/bg3-mobile.jpg)';
if (window.outerWidth >= 1024 ){
    grandpa.style.backgroundImage = 'url(./assets/bg3-pc.jpg)';  
}
btn2.style.color = "black"
btn2.style.color = "black"
btn3.style.color = "White"

})
 