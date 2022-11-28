let playBoard = document.getElementById("playBoard");
let turnOrder = 1;


function GameBoard(){
   
    gameBArray = new Array("O", "X", "O", "X", "O", "X", "O", "X", "O");
    
    
    gameBArray.forEach(createSquares)};
    
    function createSquares(){
    squares = document.createElement("div");
    squares.classList.add("squares");
    squares.innerHTML = "X";
    playBoard.appendChild(squares);

   
   return gameBArray;

   
};

GameBoard();

const playerS = (No, Score) => {
    const checkStatus = () => console.log("status report in");
    return {No, Score, checkStatus};
};

let firstPlayer = playerS(1, 0);

let secondPlayer = playerS(2, 0);

console.log(firstPlayer.checkStatus());

function clickedSquares(){

    if (turnOrder % 2 == 0){innerHTML = "O"}
    else (innerHTML = "X");
    turnOrder += 1;
}
