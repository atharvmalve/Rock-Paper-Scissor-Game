let userScore=0;
let botScore=0;
const userScore_span=document.getElementById("user-score");
const robotScore_span=document.getElementById("bot-score");
const result_div=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const background_div= document.getElementById("body");
let userInput;
let userChoice;

function main(){
    rock_div.addEventListener("click",function(){
        game("r");
        userInput="r";
    })
    
    paper_div.addEventListener("click",function(){
        game("p");
        userInput="p";
    })
    
    scissor_div.addEventListener("click",function(){
       game("s");
       userInput="s";
    })
}
//console.log(userInput);
// userChoice=document.getElementById(userInput;
function botAlgo(){
    const choices=['r','s','p'];
    const a=Math.floor(Math.random()*3);
    return choices[a];
}
function textConverter(str){
    if(str === "r"){ return"Rock "};
    if(str ==="p"){ return  "Paper "};
    return ("Scissor ");
}
// function greenglow(){
//     userChoice=document.getElementById(userInput);
//     userChoice.classList.add("green-glow");
//     setTimeout(function(){userChoice.classList.remove("green-glow") },300);
// }
function win(userInput,a){
    userScore++;
    userScore_span.innerHTML=userScore;
    robotScore_span.innerHTML=botScore;
    userChoice=document.getElementById(userInput);
    let c= textConverter(userInput);
    let d= textConverter(a);
    result_div.innerHTML= c +"beats "+ d +" You Win!!";
    userChoice.classList.add("green-glow");
    setTimeout(function(){userChoice.classList.remove("green-glow") },400);
}
function lose(userInput,a){
    botScore++;
    robotScore_span.innerHTML=botScore;
    userScore_span.innerHTML=userScore;
    userChoice=document.getElementById(userInput);
    let c= textConverter(userInput);
    let d= textConverter(a);
    result_div.innerHTML= d +"beats "+ c +" You Lose!!";
    userChoice.classList.add("red-glow");
    setTimeout(function(){userChoice.classList.remove("red-glow") },400);
}
function draw(userInput,a){
    robotScore_span.innerHTML=botScore;
    userScore_span.innerHTML=userScore;
    userChoice=document.getElementById(userInput);
    let c= textConverter(userInput);
    let d= textConverter(a);
    result_div.innerHTML= d +"beats "+ c +" It's a draw!";
    userChoice.classList.add("grey-glow");
    setTimeout(function(){userChoice.classList.remove("grey-glow") },400);
}
function game(userInput){
 const a=botAlgo();
 const b=userInput;
 switch(userInput+a){
    case "pr":
    case "rs":
    case "sp":
        win(userInput,a);
    break;
    case "rp":
    case "sr":
    case "ps":
        lose(userInput,a);
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(userInput,a);
    break;
 }
}
// function main(){
// rock_div.addEventListener("click",function(){
//     game("r");
//     userInput="r";
// })

// paper_div.addEventListener("click",function(){
//     game("p");
//     userInput="p";
// })

// scissor_div.addEventListener("click",function(){
//    game("s");
//    userInput="s";
// })
// }
main()