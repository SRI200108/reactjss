import React from 'react'
import W from './propss2'
const propss1 = () => {
    // var students={
    //   Name :'raja',
    //   age : 23
    // }
// array format
    // var students =[{
    //   Name : 'tamil',
    //   age:23
    // },{
    //   Name : "rani",
    //   age:21
    // }]

    // map 
    var students =[{
      ID:1,
      Name : 'tamil',
      age:23
    },{
      ID :2,
      Name : "rani",
      age:21
    },
  {ID :3,
      Name : "pandi",
      age:21}
  ]
  return (

    <div>
      page1
      <W P={students}/>
      {/* {students.map((r)=>(
        <div key={r.ID}>
          {r.Name}
          {r.age}

        </div>
      ))} */}
    </div>
  )
}

export default propss1
