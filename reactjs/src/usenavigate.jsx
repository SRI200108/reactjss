import React from 'react'
import { useNavigate } from 'react-router-dom'
const usenavigate = () => { 
    const R= useNavigate()
    const usn=()=>{
        R('/d')
    }
  return (
    <div>
      <button onClick={usn}>click</button>
    </div>
  )
}

export default usenavigate
