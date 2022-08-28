import React from 'react'
import "./Title.css"

const Title = () => {
  return (
    <div 
    className='wave-text'
    style={{display: "flex", flexDirection: "column", alignItems: "center", position:"relative" }}
    >
      <h2     style={{ position:"relative" }}
>React.js</h2>
      <span>React.js</span>
    </div>
  )
}

export default Title