"use strict";  
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   tmp=document.querySelector('BUTTON');
   var n=document.querySelector('BUTTON').innerHTML;
   n=n*1+1;  
   tmp.style.backgroundColor = "yellow";
   document.querySelector('BUTTON').innerText = n;
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
