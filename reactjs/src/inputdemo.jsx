import React, { useState } from 'react'

const inputdemo = () => {

     const [users, duser] = useState([{
            id: '',
            Name: ''
        }])
const[tam,rtam]=useState([])
         const SRI = (L) => {
        const { name, value } = 
        L.target;
        duser({ ...users, [name]: value })
    }

      const sri = () => { 
        tam.push(users)
        rtam([...tam])
        console.log(users) 
    }
    
    
  return (
    <div>
       <input type='text' name='id' value={users.id} onChange={SRI}></input>
            <input type='text' name='Name' value={users.Name} onChange={SRI}></input>
            <button onClick={sri}>Submit</button>
            {/* {users.Name}
            {users.id} */}
             {tam.map((r)=>(
        <div key={r.id}>
          {r.Name}
          {r.id}

        </div>
      ))}
    </div>
  )
}

export default inputdemo
