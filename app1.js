"use strict";  
let n=1;
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   document.querySelector("BUTTON").style.backgroundColor = "yellow";
   var n=document.querySelector('BUTTON').innerHTML;
   n=n*1+1;  
   document.querySelector('BUTTON').innerText = n;
   /* console.log("Clicked", event.target.textContent); */
 }
});
