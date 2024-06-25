let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

// computer choice 
const gencompchice = () => {
    const option = ["rock", "paper", "sessiors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
const drawgame = () => {
    console.log("match was draw");
    msg.innerText = "Game was draw play again!";
}
// show winner
const showWinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`you win your ${userchoice} beats ${compchoice}`;
        // msg.style.backgroundColor="#474A2C"
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`you lost ${compchoice} beats your ${userchoice}`;
        // msg.style.backgroundColor="#474A2C";
    }

}
// play the game 
const playgame = (userchoice) => {
    console.log("user choice", userchoice);
    const compchoice = gencompchice();
    console.log("computer choice", compchoice);
    // draw game
    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        // assume user is win
        let userwin = true;
        if (userchoice === "rock") {
            // paper, sessior
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            // sessior rock
            userwin = compchoice === "sessiors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true
        }
        showWinner(userwin, userchoice, compchoice);
    }

}
// user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })

});