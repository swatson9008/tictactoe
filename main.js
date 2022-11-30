let playBoard = document.getElementById("playBoard");
let turnOrder = 1;
let squareBoard = document.getElementsByClassName("squares");
let winConditions = [];



function GameBoard(){
   
    gameBArray = new Array("O", "X", "O", "X", "O", "X", "O", "X", "O");
    
    
    gameBArray.forEach(createSquares)};

    
function createSquares(element, index){
    squares = document.createElement("div");
    squares.classList.add("squares");
    squares.innerHTML = "-";
    squares.id = index;
    squares.addEventListener("click", clickedSquares);
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
    console.log(checkTie());
}



function checkTie(){
    if (winConditions.includes("E") === false)
    {return "its a tie"}
    else {};
    
}

function checkWin(){

    /*switch(winConditions){
        case ""
    }*/

}