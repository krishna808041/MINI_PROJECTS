console.log("Welcome To Tic Tac Toe");
let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a win
const Checkwin = () => {
    let boxtext = document.querySelectorAll(".boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach((e) => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector(".Info").innerText = `Winner is ${turn}!`;
            isgameover = true;
            document.querySelector(".imgInfo img").style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
            gameover.play();
        }
    });
};

// Game Logic
music.play();  
const boxes = document.getElementsByClassName("boxtext");
Array.from(boxes).forEach((element) => {
    element.addEventListener('click', () => {
        if (element.innerText === "" && !isgameover) {
            element.innerText = turn;
            
            Audioturn.play();
            Checkwin();
            if (!isgameover) {
                turn = changeTurn();
                document.querySelector(".Info").innerText = "Turn for " + turn;
                draw();
            }
        }
    });
});

// Add event listener on reset button
document.querySelector(".secondinfo .btn").addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".Info").innerText = "Turn for " + turn;
    document.querySelector(".imgInfo img").style.width = "0px";
});

// draw
const draw = ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    if(Array.from(boxtext).every(box => box.innerText!== "")&&!isgameover){
        document.querySelector(".Info").innerText = "Sorry It's Draw😂";
        isgameover=true;
    }
}

document.getElementById("musicbutton").addEventListener("click",()=>{
    music.play();
});