import React, { useState } from 'react'

const usestateinput = () => {

    const [user, nuser] = useState([{
        id: '',
        Name: ''
    }])

    const RIS = (p) => {
        const { name, value } = p.target;
        nuser({ ...user, [name]: value })
    }

    const ris = () => { 
        console.log(user) 
    }
    
    return (
        <div>
            <input type='text' name='id' value={user.id} onChange={RIS}></input>
            <input type='text' name='Name' value={user.Name} onChange={RIS}></input>
            <button onClick={ris}>Sub</button>
        </div>
    )
}

export default usestateinput
