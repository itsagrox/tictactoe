
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [board ,setBoard]=useState(Array(9).fill(null))
  const [isXturn,setIsXturn]=useState(true)
  const [winner,setWinner]=useState(null)
  const [draw,setDraw]=useState(false)

  const checkWinner=()=>{
    const winningCriteria=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    winningCriteria.forEach((condition)=>{
      if(board[condition[0]]===board[condition[1]]&&board[condition[1]]===board[condition[2]]){
        setWinner(board[condition[0]])
        return
      }
    })
    if(!board.includes(null)){
      setDraw(true)
    }
  }

  const handleClick=(index)=>{
    const newBoard=[...board]
    isXturn? newBoard[index]='X' : newBoard[index]='O'
    setBoard(newBoard)
    setIsXturn(!isXturn)
  }
  const reset =()=>{
    setBoard(Array(9).fill(null))
    setIsXturn(true)
    setDraw(null)
    setWinner(null)
  }

useEffect(() => {
  checkWinner()
}, [board])

  
  return (
    <div className='parent'>
    <div>
      <h1>Welcome to tictactoe</h1>
      <div className='controls'>{winner?<span>{winner} WINS!!</span> : draw? <span>its a DRAW!</span> : <span>{isXturn?'X':'O'} turn to play</span> }<button onClick={reset}>Reset</button></div>
    </div>
    <div className='board'>
    {board.map((item,index)=>{
      return <button className='square' onClick={()=>handleClick(index)} disabled={board[index]!==null || winner || draw} key={index}>{board[index]}</button>
    })}
    </div>
    </div>
  );
}

export default App;
