const Board = () => {
  // gameState is an array that keeps track of the tick mark in each square
  const [gameState, setGameState] = React.useState(Array(9).fill(null)); // gameState is initialized to an array of length 9 filled with null values
  const [player, setPlayer] = React.useState(1); // player is initialized to 1, which is player X
  

  const getGameStatus = () => {
      let numberOfTurnsTaken = gameState.filter((value) => value!= null).length; 
      if (numberOfTurnsTaken < 5) {
        return `Next player: ${player == '0' ? 'Player O' : 'Player X'}` // there can't be a winner if only 4 turns have occurred
      }
      let winner = checkForWinner(gameState);
      if (winner == null) {
        if (numberOfTurnsTaken < 9) {
          return `Next player: ${player == '0' ? 'Player O' : 'Player X'}`
        } else {
          return `It's a tie!` // still no winner and 9 turns have occurred
        }
      } else {
        return `Player ${winner} wins!`;
      }
    }

  const checkIfGameIsOver = () => {
    if (status == `It's a tie!` || status == `Player O wins!` || status == `Player X wins!`) {
      console.log(status);
      return `Click to play again!`
    } else {
      return false;
    }
  }

  let status = getGameStatus();
  let playAgain = checkIfGameIsOver();
  
  const takeTurn = (id) => {
    gameState[id] = player; // inserts the value of the current player into the array in the index corresponding with the square that was clicked
    setGameState(gameState); // ensures React will re-render (although it doesn't seem necessary given the next line will also cause a re-render)
    setPlayer((player+1)%2); // sets player to the next player
    return player; // because of asynchronicity, the player being returned is still the current player (previous line hasn't executed yet)
  }

  function renderSquare(id) {
      return <Square id = {id} takeTurn = {takeTurn}> </Square>;
  }
  
  return (
    <div
      className="game-board"
    >
      <div className = "grid-row">
      {renderSquare(0)} 
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className = "grid-row">
      {renderSquare(3)} 
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className = "grid-row">
      {renderSquare(6)} 
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
      <div id="info">
          <h1>{status}</h1>
          {playAgain && <button onClick = {(e) => window.location.reload(false)}
          className = 'replay'>{playAgain}</button>}
      </div>
    </div>
  );
};


// Web component called Square
const Square = ({id, takeTurn}) => {
    const mark = ['O', 'X', ''];
    const [tick, setTick] = React.useState(2); // tick is intialized to 2. 
    
    return (
    <button className = {tick != 2 ? (tick == 0 ? 'O' : 'X') : 'emptyButton'}
        onClick = {(e) => {
          if (tick == 2) { // a player can only click on a square that hasn't been clicked already
          setTick(takeTurn(id)); // takeTurn(id) returns the current player, who just clicked the square
          }
          
    }}> 
        <h1>{mark[tick]}</h1> 
        
    </button>
    )
}

const possibleWinConditions = [
  // three in a row
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // three in a column
  [0,3,6],
  [1,4,7],
  [2,5,8],
  // three in a diagonal
  [0,4,8],
  [2,4,6]
];


const checkForWinner = (gameState) => {
  for (let i = 0; i < possibleWinConditions.length; i++) {
    const [a, b, c] = possibleWinConditions[i];
    if(gameState[a] == gameState[b] && gameState[a] == gameState[c] && gameState[a] != null) {
      if (gameState[a] == 0) {
        return 'O'} else if (gameState[a] == 1) {
          return 'X'};
    } 
  }
  return null;
}

  
  // ========================================
  
  ReactDOM.render(<Board />, document.getElementById("root"));