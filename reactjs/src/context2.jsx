import React, { useContext } from 'react'
import { ProN } from './context1'

const context2 = () => {

    const L = useContext(ProN);

    return (
        <div>
           {L.map((pr)=>(
            <div key={pr.id}>
                {pr.name}{pr.price}
                </div>
           ))}

        </div>
    )
}

export default context2
