import React, { useCallback, useState } from 'react'
import Stt  from './callback2'

const Yes =() => {
const [count, tcount] = useState(0);

const increment = useCallback(() => {
    tcount((count) => count +1);
},[]);

  return (
    <div>
      <p>{count}</p>
      <button  onClick={increment}>incre</button>
          <Stt Increment = {increment}/>

    </div>
  )
}

export default Yes;
