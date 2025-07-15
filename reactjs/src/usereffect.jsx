import React, { useEffect } from 'react'
import axios from 'axios'
const usereffect = () => {

useEffect(()=>{

axios.get('https://dummyjson.com/products')
.then((rs)=>{
    console.log(rs.data.products);
    
}).catch((ty)=>{
    console.log(ty);
    
})

})

  return (
    <div>
      
    </div>
  )
}

export default usereffect
