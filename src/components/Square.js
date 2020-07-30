import React, {useState} from 'react';
import styles from '../styles/board.css';


const Square = (props) => {

  return(
    <>
    <button className='square'>
      {props.number}

    </button>
    </>
  )
}

export default Square;
