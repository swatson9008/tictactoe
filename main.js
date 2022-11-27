let playBoard = document.getElementById("playBoard");


function GameBoard(){
   
    gameBArray = new Array("O", "X", "O", "X", "O", "X", "O", "X", "O");
    
    gameBArray.forEach(createSquares);
    
    function createSquares(){
    squares = document.createElement("div");
    squares.classList.add("squares");
    playBoard.appendChild(squares);

   }
   return gameBArray;

   
}

console.log(GameBoard);