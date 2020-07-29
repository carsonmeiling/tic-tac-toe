import React, {useState} from 'react';
import styles from '../styles/board.css';


const Square = () => {
  const [number, setNumber] = useState()

  return(
    <>
    <button className='square'>
      {number}

    </button>
    </>
  )
}

export default Square;
