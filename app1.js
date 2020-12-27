"use strict";  
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   countButton.doit();
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});

class countButton {
  constructor() {    
    /* momentan leer */
  }
  doit(i) {
    let tmp=document.querySelector('BUTTON');
    var n=tmp.innerHTML;
    n=n*1+1;  
    tmp.style.backgroundColor = "yellow";
    tmp.innerText = n;
  }
};     
