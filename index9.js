const btn=document.querySelector(".btn");
const diceBox=document.querySelector(".numbers");
const boxContainer=document.querySelector(".box__container");
const sideBarBox=document.querySelector(".sideBarBox");
const remaining=document.querySelector("span");
const score=document.querySelector("h2");
let chances=5;
let sum=0;
function rollDice() {  
    const ans = Math.floor(Math.random() * 6) + 1;
    sum = sum+ ans;
    boxContainer.innerHTML="";
    sideBarBox.innerHTML="";
    score.innerHTML=`<p>Your total Score:</P>`;
    if(chances <=0 ){
        alert(" you loose yours chances play again");
        chances=5;
        sum=0;
        diceBox.innerHTML="";    
             
    }
    else{
        diceBox.textContent= ans;
        chances--;
        for(let i=0; i<ans; i++ ){
            let div=document.createElement("div");
            div.classList.add("box");
            boxContainer.appendChild(div);
        }
        for(let j=0; j<chances; j++ ){
            let div2=document.createElement("div");
            div2.classList.add("box");
            sideBarBox.appendChild(div2);
        }
        
        remaining.innerHTML=`<p>Chances:${chances}</p>`;
        score.innerHTML=`<p>Your total Score: ${sum}</P>`;
    }
  
}

