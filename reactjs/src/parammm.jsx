import React from 'react'
import { useParams } from 'react-router-dom'

const parammm = () => {
    const {user} = useParams()

  return (
    <div>
      {user}
      <h1>Hello world</h1>
      <p>The "Hello, World!" program is a foundational piece of code used in <br />
         programming tutorials to introduce the basic syntax of a language.<br />
          It displays the phrase "Hello, World!" on the screen, serving <br />
          as a simple way to verify that a program is running correctly.<br />
        This program is often the first step for beginners learning to code,<br />
         as it demonstrates the fundamental principles of displaying output. </p>
    </div>
  )
}

export default parammm
