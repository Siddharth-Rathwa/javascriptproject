let boxes=document.querySelectorAll(".box")
let restbtn=document.querySelector(".rstBtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".newBtn")
let turno=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// set the reset game
const resetgame=()=>{
    turno=true
    enableboxes();
    msgcontainer.classList.add("hide");
}
newgame.addEventListener("click", resetgame);
restbtn.addEventListener("click", resetgame);
// set the  user turn 
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turno){
            box.innerText="O"
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        chkwinner();
    })
});
// disabled boxes function
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
// Winner show function
const showwinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
// To check the all condition for win patterns 
const chkwinner=()=>{
    for(let pattern of winpatterns){
        // console.log(pattern);
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        if(position1!=""&& position2!=""&&position3!=""){
            if(position1==position2&& position2==position3){
                console.log("winner", position1)
                showwinner(position1);
            }
        }
        // else {
        //     console.log("Match was tied")
        // }
        
    }
}