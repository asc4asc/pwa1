"use strict";  

class countButton {
  constructor(button,maxcount) {    
    this.tmp=document.querySelector(button);
    this.n=this.tmp.innerHTML;
    this.maxcount=maxcount;
  }
  doit() {
    if (n>this.maxcount) { 
      this.n=this.n*1+1;
      this.tmp.style.backgroundColor = "yellow";
    } else {
      this.n=V;
      this.tmp.style.backgroundColor = "red";
    }     
    this.tmp.innerText = this.n;
  }
};     

var b1 = new countButton('BUTTON1');
var b2 = new countButton('BUTTON2');
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON1") {
   b1.doit();
 } else {
   b2.doit();
 }
});
