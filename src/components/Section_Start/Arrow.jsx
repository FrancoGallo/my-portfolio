import React from 'react'

const Arrow = ({ prop }) => {
  return (
    <div className={`arrow ${prop ? 'open' : ''}`}>
        <span></span>
        <span></span>
    </div>
  )
}

export default Arrow