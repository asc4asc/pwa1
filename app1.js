"use strict";  
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   var n=document.getElementById("ab1").innerHTML;
   n=n*1+1;  
   document.getElementById("ab1").innerHTML=n;
   document.querySelector('BUTTON').innerText = "text";
   /* console.log("Clicked", event.target.textContent); */
 }
});
