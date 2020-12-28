"use strict";  

class countButton {
  constructor(button,maxcount=5) {    
    this.tmp=document.querySelector(button);
    this.n=this.tmp.innerHTML;
    this.maxcount=maxcount;
  }
  doit() {
    if (this.n < this.maxcount-1) { 
      this.tmp.style.backgroundColor = "yellow";
    } else { 
      this.tmp.style.backgroundColor = "red";
    }     
    this.n=this.n*1+1;
    this.tmp.innerText = this.n;
  }
};     

var b1 = new countButton('BUTTON1');
var b2 = new countButton('BUTTON2');
document.body.addEventListener("click", event => {
 switch (event.target.nodeName)  {
    case 'BUTTON1':
      b1.doit();
      break;
    case 'BUTTON2':
      b2.doit();
      break;
    default:
      b1.doit();
      b2.doit();
      break;
 }    
});
