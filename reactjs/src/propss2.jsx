import React from 'react'
import Ys from './propsss3'
const propss2 = (props) => {
  // var T= props.P
  return (
    <div>
      {/* page2-{props.P.Name} */}
      {/* page2-{props.P[1].Name} */}

      {/* {T.map((r)=>(
        <div key={r.ID}>
          {r.Name}
          {r.age}

        </div>
      ))} */}
      
      page2
      <Ys U={props.P}/>

    </div>
  )
}


export default propss2
