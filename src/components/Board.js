import React, {useState} from 'react';
import styles from '../styles/board.css';
import Square from './Square';


const Board = () => {
  


  return(
    <>
    <div className='board-row'>
      <Square setNumber={1}/>
      <Square />
      <Square />
    </div>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}

export default Board;
