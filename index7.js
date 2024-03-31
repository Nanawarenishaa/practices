const btn=document.querySelector(".icon__menu");
const nav=document.querySelector("nav");
const img_box=document.querySelectorAll(".img");
const box1=document.querySelector(".box1");
const box2=document.querySelector(".box2");
btn.addEventListener("click",() =>{
    nav.classList.toggle("menu");
});
let result=1;
img_box.forEach(box_img =>{
    box_img.addEventListener("click",() =>{
      console.log("hello");
      if(box_img && result==1){
      box1.appendChild(box_img);
      result=0;
      }
      else if(result==0){
        box2.appendChild(box_img);
        result=1;
      }

    });
});