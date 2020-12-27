"use strict";  

class countButton {
  constructor() {    
    this.tmp=document.querySelector('BUTTON');
    this.n=this.tmp.innerHTML;
  }
  doit() {
    /* let tmp=document.querySelector('BUTTON'); */
    var n=this.tmp.innerHTML;
    this.n=this.n*1+1;  
    this.tmp.style.backgroundColor = "yellow";
    this.tmp.innerText = n;
  }
};     

document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   var b1 = new countButton();
   b1.doit();
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
