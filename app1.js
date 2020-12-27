"use strict";  
document.body.addEventListener("click", event => {
 let n=1;
 if (event.target.nodeName == "BUTTON") {
   /* var n=document.querySelector('BUTTON').innerHTML;*/
   n=n*1+1;  
   document.querySelector('BUTTON').innerText = n;
   /* console.log("Clicked", event.target.textContent); */
 }
});
