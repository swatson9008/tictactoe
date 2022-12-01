let playBoard = document.getElementById("playBoard");
let turnOrder = 1;
let squareBoard = document.getElementsByClassName("squares");
let restartB = document.getElementById("restartButton");
let winnerB = document.getElementById("winnerBoard");
let squareR = document.querySelectorAll(".squares")
let winConditions = [];
let knownWinner;






function GameBoard(){
   
    gameBArray = new Array("O", "X", "O", "X", "O", "X", "O", "X", "O");
    
    
    gameBArray.forEach(createSquares)};

    
function createSquares(element, index){
    let squares = document.createElement("div");
    squares.classList.add("squares");
    squares.innerHTML = "-";
    squares.id = index;
    squares.addEventListener("click", clickedSquares, {once : true});
    winConditions.push("E");
    playBoard.appendChild(squares);
   

   
   return gameBArray;

   
};

GameBoard();

console.log(winConditions);

const playerS = (name) => {
    return {name};
};

let firstPlayer = playerS("player1");

let secondPlayer = playerS("player2");

console.log(firstPlayer.name);





function clickedSquares(e){

    if (e.target.textContent === "O" || e.target.textContent === "X"){return ""}
    else if (turnOrder % 2 == 0)
    {e.target.textContent = "O";
    winConditions.splice(e.target.id, 1, "O")}
    else {e.target.textContent = "X";
    winConditions.splice(e.target.id, 1, "X")};
    console.log(winConditions);
    turnOrder += 1;
    console.log(turnOrder);
    checkWin();
    checkTie();
    
};


function checkWin(){
    if (winConditions[0] === "X" && winConditions[1] === "X" && winConditions[2] === "X")
        {knownWinner = "X"}
    else if (winConditions[0] === "X" && winConditions[3] === "X" && winConditions[6] === "X")
        {knownWinner = "X"}
    else if (winConditions[0] === "X" && winConditions[4] === "X" && winConditions[8] === "X")
        {knownWinner = "X"}
    else if (winConditions[1] === "X" && winConditions[4] === "X" && winConditions[7] === "X")
        {knownWinner = "X"}
    else if (winConditions[3] === "X" && winConditions[4] === "X" && winConditions[5] === "X")
        {knownWinner = "X"}
    else if (winConditions[2] === "X" && winConditions[5] === "X" && winConditions[8] === "X")
        {knownWinner = "X"}
    else if (winConditions[2] === "X" && winConditions[4] === "X" && winConditions[6] === "X")
        {knownWinner = "X"}
    else if (winConditions[6] === "X" && winConditions[7] === "X" && winConditions[8] === "X")
        {knownWinner = "X"}

    else if (winConditions[0] === "O" && winConditions[1] === "O" && winConditions[2] === "O")
        {knownWinner = "O"}
    else if (winConditions[0] === "O" && winConditions[3] === "O" && winConditions[6] === "O")
        {knownWinner = "O"}
    else if (winConditions[0] === "O" && winConditions[4] === "O" && winConditions[8] === "O")
        {knownWinner = "O"}
    else if (winConditions[1] === "O" && winConditions[4] === "O" && winConditions[7] === "O")
        {knownWinner = "O"}
    else if (winConditions[3] === "O" && winConditions[4] === "O" && winConditions[5] === "O")
        {knownWinner = "O"}
    else if (winConditions[2] === "O" && winConditions[5] === "O" && winConditions[8] === "O")
        {knownWinner = "O"}
    else if (winConditions[2] === "O" && winConditions[4] === "O" && winConditions[6] === "O")
        {knownWinner = "O"}
    else if (winConditions[6] === "O" && winConditions[7] === "O" && winConditions[8] === "O")
        {knownWinner = "O"}
    else {return ""};

    console.log(knownWinner);

    congratWinner(knownWinner);


};

function congratWinner() {

winnerB.textContent = knownWinner + " is the Winner!";
squareR.forEach(squareR => squareR.removeEventListener("click", clickedSquares));
};

function checkTie(){
    if (winConditions.includes("E") === false)
    {console.log("It's a tie")}
    else {};
    
};

restartB.addEventListener("click", () => {restartGame()});

function restartGame(){
    winnerB.innerHTML = "";
    playBoard.textContent = "";
    winConditions = [];
    GameBoard();
    console.log("test");
};

/*let WinCheck = Array => {

let WinX = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];

let WinO = ["O", "O", "O", "O", "O", "O", "O", "O", "O"];

WinS {}

}

/*let WinX1 = ["X", "X", "X", ".", ".", ".", ".", ".", "."];

let WinX2 = ["X", "X", "X", "O", "O", "O", "O", "O", "O"];

console.log(WinX1[0] === WinX2[0]);*/