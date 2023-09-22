import React from 'react'

const BtnLink = ({ className, url, svg, name }) => {
  return (
    <a href={url} className={className} target="_blank" rel="noreferrer">
        <div className='icon-link'>
            {svg}
        </div>

        <span>
            <span>Enlace al </span>
            {name}
        </span>
    </a>
  )
}

export default BtnLink