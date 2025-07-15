import React, { useMemo, useState } from 'react'

const usememmo = () => {
    const [digits,setdigits] = useState(0);
    // const multipliedvalues = digits * digits
const Multipliedvalue = useMemo(()=>{
    return digits * digits
},[digits])
  return (
    <div>
      <h1>SQUARE of {digits} ;; {Multipliedvalue}</h1>
      <button onClick={() => setdigits(digits + 1)}>click</button>
    </div>
  )
}

export default usememmo
