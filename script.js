var input=document.querySelector("#INPUT");
var btndown=document.querySelector("#down");
var btnup=document.querySelector("#up");


let a =32;
btndown.addEventListener("click",()=>{

 a -= 2 ;

input.style.fontSize=`${a}px`;
// a++;

// var a=a++;

})


btnup.addEventListener("click",()=>{
  a+=2;
  input.style.fontSize=`${a}px`;
})