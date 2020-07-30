import React, {useState} from 'react';
import styles from '../styles/board.css';


const Square = (props) => {

  const symbol = () => {
    return (
      <>
        {props.symbol}
      </>
    )
  }

  return(
    <>
    <button className='square' onClick={symbol}>
      {props.number}

    </button>
    </>
  )
}

export default Square;
