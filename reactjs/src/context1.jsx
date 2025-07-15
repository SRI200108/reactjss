import React, { useState, createContext  } from 'react'

import UUU from './context2'

export const ProN = createContext();

const context1 = () => {
  const [ prod, setprod ] = useState([
    { id: 1, name: 'tamil', image: '', price: 230 },
    { id: 2, name: 'bharathi', image: '', price: 130 },
    { id: 3, name: 'pandi', image: '', price: 330 },

  ])


  return (
    <ProN.Provider value={prod}>
      <UUU />
    </ProN.Provider>
  )
}

export default context1
