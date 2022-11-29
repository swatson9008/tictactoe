let playBoard = document.getElementById("playBoard");
let turnOrder = 1;
let squareBoard = document.getElementsByClassName("squares");



function GameBoard(){
   
    gameBArray = new Array("O", "X", "O", "X", "O", "X", "O", "X", "O");
    
    
    gameBArray.forEach(createSquares)};

    
function createSquares(element, index){
    squares = document.createElement("div");
    squares.classList.add("squares");
    squares.innerHTML = "-";
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





function clickedSquares(e){

    if (e.target.textContent === "O" || e.target.textContent === "X"){return ""}
    else if (turnOrder % 2 == 0){e.target.textContent = "O"}
    else (e.target.textContent = "X");
    turnOrder += 1;
    console.log(turnOrder);

    /*removeEventListener

    checkWin();*/
}

function checkWin(){

}