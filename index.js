let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let tab = document.querySelector(".switchTab")
let v = document.querySelector("#v")




btn1.addEventListener("click",(e)=>{
    let position = e.target.offsetWidth * 1 
tab.style.transform = `translateX(${e.x -40}px)`;
let grandpa = btn1.parentElement.parentElement.parentElement;
grandpa.style.color = "white";
grandpa.style.backgroundImage = 'url(./assets/bg2.jpg)';
console.log(e.x)

})
 
btn2.addEventListener("click",(e)=>{
    let position = e.target.offsetWidth * 1 
tab.style.transform = `translateX(${e.x -40}px)`;
let grandpa = btn2.parentElement.parentElement.parentElement;
grandpa.style.backgroundImage = 'url(./assets/img3.jpg)';
grandpa.style.color = "black";
console.log(e.x)
})
 
btn3.addEventListener("click",(e)=>{
    let position = e.target.offsetWidth * 1 
tab.style.transform = `translateX(${e.x -40}px)`;
let grandpa = btn3.parentElement.parentElement.parentElement;
grandpa.style.backgroundImage = 'url(./assets/bg3-pc.jpg)';
grandpa.style.color = "white";
console.log(e.x)
})
 