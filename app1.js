"use strict";  
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   let tmp=document.querySelector('BUTTON');
   var n=tmp.innerHTML;
   n=n*1+1;  
   tmp.style.backgroundColor = "yellow";
   tmp.innerText = n;
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
