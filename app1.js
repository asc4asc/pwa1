"use strict";  

let tmp=document.querySelector(body);
tmp.style.backgroundColor = "red";

document.body.addEventListener("click", event => {
 if (event.target.nodeName)  {
   tmp.style.backgroundColor = "green";   
 }   
});
