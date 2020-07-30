import React, {useState} from 'react';
import styles from '../styles/board.css';
import Square from './Square';


const Board = () => {
  const [number, setNumber] = useState('')
  const [symbol, setSymbol] = useState('X')
  


  return(
    <>
    <div className='board-row'>
      <Square number={1} symbol={symbol}/>
      <Square number={2}/>
      <Square number={3}/>
    </div>
    <div className='board-row'>
      <Square number={4}/>
      <Square number={5}/>
      <Square number={6}/>
    </div>
    <div className='board-row'>
      <Square number={7}/>
      <Square number={8}/>
      <Square number={9}/>
    </div>
    </>
  )
}

export default Board;
