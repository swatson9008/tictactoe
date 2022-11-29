let playBoard = document.getElementById("playBoard");
let turnOrder = 1;
let squareBoard = document.getElementsByClassName("squares");



function GameBoard(){
   
    gameBArray = new Array("O", "X", "O", "X", "O", "X", "O", "X", "O");
    
    
    gameBArray.forEach(createSquares)};

    
function createSquares(element, index){
    squares = document.createElement("div");
    squares.classList.add("squares");
    squares.innerHTML = "X";
    squares.id = "box" + index;
    squares.addEventListener("click", clickedSquares);
    playBoard.appendChild(squares);

   
   return gameBArray;

   
};

GameBoard();

const playerS = (No, Score) => {
    
};

let firstPlayer = playerS(1, 0);

let secondPlayer = playerS(2, 0);





function clickedSquares(){

    if (turnOrder % 2 == 0){textContent = "O"}
    else (textContent = "X");
    turnOrder += 1;
    console.log(turnOrder);

    /*removeEventListener

    checkWin();*/
}

function checkWin(){

}