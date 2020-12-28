"use strict";  

let tmp=document.querySelector("body");
tmp.style.backgroundColor = "red";

document.body.addEventListener("click", event => {
    tmp.style.backgroundColor = "green";   
 }   
});
