const boxes=document.querySelectorAll(".box");
const section1=document.querySelector(".section1");
const redbox=document.querySelector(".redbox");
const greenbox=document.querySelector(".greenbox");
boxes.forEach((box) => {
    let result=1;
    box.addEventListener("click", () =>{
  let colorred=  box.classList.contains("red");   
  let colorgreen=  box.classList.contains("green");   
    if(colorred && result==1){
        console.log("heelo");
        box.remove();
        redbox.appendChild(box);
        result=0;
     }
     else if(result==0){
section1.appendChild(box);
     result=1;
     }
     else if(colorgreen && result==1){
      box.remove();
      greenbox.appendChild(box);
      result=0;
     }
     else if(result==0){
        section1.appendChild(box);
        result=1;
             }
})
});