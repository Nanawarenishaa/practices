const home=document.querySelector(".container");
console.log(home);
const bulb=document.querySelector(".bulb");
console.log(bulb);
const btn=document.querySelector("button")
console.log(btn);

let result= 0;
btn.addEventListener("click",() =>{
    console.log("hey");
    if(result==0){
        home.style.backgroundColor="whitesmoke"
        bulb.style.backgroundColor="yellow"
        btn.textContent="OFF"
        result=1;
    }else{
        home.style.backgroundColor=" rgba(0, 0, 0, 0.5)"
        bulb.style.backgroundColor="white"
        btn.textContent="ON"
        result=0;
    }

});