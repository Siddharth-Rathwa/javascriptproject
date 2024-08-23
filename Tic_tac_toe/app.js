// Access the all attributes
let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".rstBtn");
let newGame = document.querySelector(".newBtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;
// Chack win patterns
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// set the user turn
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
// reset button
const resetGame=()=>{
    turnO=true;
    msgcontainer.classList.add("hide");
    enableboxes();
}
restBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
// enableboxes
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
// disableboxes
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
// show winner
const showwinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
// check win patterns
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if(position1!=""&& position2!=""&& position3!=""){
            if(position1==position2&& position2==position3){
                console.log("Winner is ", position1);
                showwinner(position1);
            }
        }
    }
}