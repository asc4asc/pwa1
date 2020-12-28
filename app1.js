"use strict";  

let tmp=document.querySelector("body");
tmp.style.backgroundColor = "blue";

let i=1;
document.body.addEventListener("click", event => {
  if (i == 1) {
    tmp.style.backgroundColor = "green"; i=0; 
  } else {
    tmp.style.backgroundColor = "yellow"; i=1;
  }
});
