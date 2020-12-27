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

class countButton {
  constructor() {    
    this.s="";
  }
  doit(i) {
    //for (this.i=0; this.i<10; this.i++) { 
      this.s = "Hello JavaS"+i+"<br>"+this.s; 
      document.getElementById("demo").innerHTML = this.s;
      console.log("Hello JavaScript!",i,"\n");
    //}
  }
};     
