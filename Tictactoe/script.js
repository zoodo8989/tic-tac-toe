let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newgame");
let msgcon = document.querySelector(".msg-contener");
let msg = document.querySelector(".msg");
let main = document.querySelector("main");

let turnO = true;//playerX = false, plaxer 0 = true

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]  
]

const resetgame = () => {
    turnO = true;
    enableBoxs();
    msgcon.classList.add("hide");

}
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";//print O
            turnO = false; //for player X
        }
        else{
            box.innerText = "X";//print x
            turnO = true;//for player O
        }
        box.disabled = true;
        chakeWinner();
    });
})

const enableBoxs = () => {
    for(let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledBoxs = () => {
    for(let box of boxs) {
        box.disabled = true;
    }
}
const sowwinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledBoxs();
    main.classList.add("hide");
}

const chakeWinner = () => {
    for(let pattren of winPattern) {
        let pos1 = boxs[pattren[0]].innerText;
        let pos2 = boxs[pattren[1]].innerText;
        let pos3 = boxs[pattren[2]].innerText;

        if(pos1 != "" && pos2 != "", pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3) {
                console.log(pos1);
                sowwinner(pos1);
            }
        }
    }
}
const newgamebtn = () => {
    main.classList.remove("hide");
    msgcon.classList.add("hide");
    enableBoxs();
}
newGame.addEventListener("click", newgamebtn);
    

reset.addEventListener("click", resetgame);