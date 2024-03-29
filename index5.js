const boxes=document.querySelectorAll(".box");
console.log(boxes);
const btn=document.querySelector("button");
console.log(btn);
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        box.classList.add("selected");
});
});

btn.addEventListener("click", () =>{
        console.log("hello");
    let selectdiv=document.querySelectorAll(".box.selected");
    selectdiv.forEach( selectboxs =>{

        selectboxs.remove();
        
    })
    let index=Array.from(boxes).indexOf(selectdiv)
    for(let i=index; i< boxes.length;i++){
        console.log(i);
        boxes[i].innerHTML=i +1;
    }
});

