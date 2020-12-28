"use strict";  

class clock {
  constructor() {    
  }
  doit() {
  }
};     

let tmp=document.querySelector(body);
tmp.style.backgroundColor = "red";

document.body.addEventListener("click", event => {
 switch (event.target.nodeName)  {
 tmp.style.backgroundColor = "green";   
 }    
});
