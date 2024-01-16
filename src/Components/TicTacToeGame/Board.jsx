import React, { useState } from "react";
import Square from "./Square";
import './board.css'
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4>Player {isXTurn ? "X" : "O"} please move</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;



// import React, { useState } from 'react';
// import Box from './components/Box';

// const App = () => {

//     const [state, setState] = useState(Array(9).fill(null));
//     const [isXTurn, setIsXTurn] = useState(true);

//     function isWinner() {
//         const posibleWinner = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [2, 4, 6],
//             [0, 4, 8],
//         ]

//         for (let logic of posibleWinner) {
//             const [a, b, c] = logic;

//             if (state[a] !== null && state[a] == state[b] && state[b] == state[c]) {
//                 return state[a];
//             }
//         }

//         return false
//     }

//     let winner = isWinner();

//     function handleClick(i) {
//         if (state[i] !== null) return;

//         let copyState = [...state];
//         copyState[i] = isXTurn ? "X" : "O";
//         setIsXTurn(!isXTurn);
//         setState(copyState);
//     }

//     function handleReset() {
//         setState(Array(9).fill(null));
//     }

//     return (
//         <div className='flex justify-center items-center flex-col h-screen'>
//             <h1 className='font-bold text-2xl mb-2'>Lets Play Tic Tac Toe Game.</h1>
//             {
//                 winner ?
//                     (
//                         <>
//                             <h2 className='text-green-500 text-2xl mb-2'>Winner is - {winner}</h2>
//                             <button onClick={handleReset} className='text-white bg-black px-4 py-2 rounded-lg'>Play Again</button>
//                         </>
//                     )
//                     :
//                     (
//                         <>
//                             <h4 className='font-semibold text-1xl mb-2'>Player {isXTurn ? "X" : "O"} please move.</h4>
//                             <div className='grid grid-cols-3 gap-y-2 w-3/12 border-2 border-black pl-4 py-4'>
//                                 {
//                                     [...Array(9)].map((_, i) => <Box key={i} state={state[i]} handleClick={handleClick} index={i} />)
//                                 }

//                             </div>
//                         </>
//                     )
//             }
//         </div>
//     )
// }

// export default App


// Box.js file code 
// import React from "react";

// const Box = ({ state, handleClick, index }) => {
//     return (

//         <div onClick={() => handleClick(index)} className=" w-20 h-20 bg-black text-white flex justify-center items-center">
//             <button className="text-2xl font-bold">{state}</button>
//         </div>

//     )
// }

// export default Box;
