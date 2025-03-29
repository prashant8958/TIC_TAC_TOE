let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


console.log("prashant pal");
let turn0=true;

const winPatterns=[['0','1','2'],['3','4','5'],['6','7','8'],['1','4','7'],['0','3','6'],['2','5','8'],['0','4','8'],['2','4','6']];
const resetGame = () =>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("button is clicked");
        if (turn0) {
            box.innerText="0"
            turn0=false;}
        else{
            box.innerText="x"
            turn0=true;
        }         
        box.disabled=true;  
        checkWinner();
    });
});
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerText='congratulation, Winner is '+ winner;
    if (!winner){
        console.log("game is drawn");
    }
    msgContainer.classList.remove("hide");
    disabledboxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if (pos1Val !="" && pos2Val !="" && pos3Val){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);