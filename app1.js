"use strict";  

class countButton {
  constructor() {    
    let n=1; /* momentan leer */
  }
  doit() {
    let tmp=document.querySelector('BUTTON');
    var n=tmp.innerHTML;
    n=n*1+1;  
    tmp.style.backgroundColor = "yellow";
    tmp.innerText = n;
  }
};     

document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   var b1 = new countButton();
   b1.doit();
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
