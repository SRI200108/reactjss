import React, { useState } from 'react'

const hoooks = () => {
    // const [name,rname] = useState('ezhil')
    // const PLA=()=>{
    //     rname('yash')
    // }
    // multi data
    const [name,uname]=useState([{
        name:'raja',
        age:23
    }])

    const PL=()=>{
    //     uname([{
    //         name:'yash',
    //         age:24
    //     }])
          name.push({
         name:'sri',
            age:23
    })
    uname([...name])
    }
  
    // console.log(name);
    

  return (
    <div>
      {/* {name}
      <button onClick={PLA}>change</button> */}
      {/* {na[0].name} */}
    
    {name.map((r)=>(
      <div key={r.name} >{r.name}{r.age}</div>
    ))
    }

 
      <button onClick={PL}>change</button> 
    </div>
  )
}

export default hoooks
