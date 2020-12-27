"use strict";  
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   var n=document.querySelector('BUTTOB').innerHTML;
   n=n*1+1;  
   document.querySelector('BUTTON').innerText = "n";
   /* console.log("Clicked", event.target.textContent); */
 }
});
