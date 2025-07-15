import React from 'react'

const propsss3 = (props) => {

    var stu = props.U
  return (
    <div>
            page3-{stu.map((r)=>(
        <div key={r.ID}>
          {r.Name}
          {r.age}

        </div>
      ))}

    </div>
  )
}

export default propsss3
