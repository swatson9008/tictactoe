let playBoard = document.getElementById("playBoard");
let turnOrder = 1;
let restartB = document.getElementById("restartButton");
let restartS = document.getElementById("restartB");
let squareBoard = document.getElementsByClassName("squares");
let winnerB = document.getElementById("winnerBoard");
let winConditions = [];
let knownWinner;
let getName = document.getElementById("enterName");
/*let P1Name = document.getElementById("pName1E").value;
let P2Name = document.getElementById("pName2E").value;*/
let playerNameEntry = document.getElementById("playerNameEntries");
let playerNameForm = document.getElementById("playerNameForm");




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



console.log(winConditions);



const players = (e) => {


let playerOne = "Player 1";
let playerTwo = "Player 2";
    

let playerCreate = (e) => {
    e.preventDefault();
    playerOne = document.getElementById("pName1E").value;
    playerTwo = document.getElementById("pName2E").value;
    let P1Status = document.createElement("div");
    P1Status.textContent = "Player 1 " + playerOne;
    playerNameEntry.appendChild(P1Status);
    let P2Status = document.createElement("div");
    P2Status.textContent = "Player 2 " + playerTwo;
    playerNameEntry.appendChild(P2Status);
    GameBoard();
    restartS.style.removeProperty("display");
    playerNameForm.innerHTML = "";
    return {playerOne, playerTwo};
    
}

let congratWinner = () => {
    let squareR = document.querySelectorAll(".squares");
    if (knownWinner === "X"){winnerB.textContent = playerOne + " is the Winner!"}
    if (knownWinner === "O"){winnerB.textContent = playerTwo + " is the Winner!"}
    squareR.forEach(squareR => squareR.removeEventListener("click", clickedSquares));
};

return {playerCreate, congratWinner}
};

const newPlayers = players();

getName.addEventListener("click", newPlayers.playerCreate);




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

    

    newPlayers.congratWinner(knownWinner);


};

/*function congratWinner() {
let squareR = document.querySelectorAll(".squares");
winnerB.textContent = knownWinner + " is the Winner!";
squareR.forEach(squareR => squareR.removeEventListener("click", clickedSquares));
};*/

function checkTie(){
    if (winConditions.includes("E") === false)
    {winnerB.textContent = "It's a tie!";}
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

