import React, { useState } from 'react'

const callback2 = ({ Increment }) => {

    console.log('ButtonBack');
const [bgro,sbgro] = useState(0)
    const inc =() => {
        sbgro (bgro+1)
    }
  return (
    <div>
    pag2
    <button onClick={Increment}>pt</button>
 <p>{bgro}</p>     
 <button onClick={inc}>increase</button>
    </div>
  )
}

export default React.memo(callback2)
