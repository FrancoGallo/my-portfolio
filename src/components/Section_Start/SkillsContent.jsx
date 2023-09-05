import React from 'react'

const SkillsContent = ( { content } ) => {

  const porcentaje = '60%'

  const width = {
    width: porcentaje
  }

  return (
    <div className={content ? 'skills-content' : 'skills-content-none'}>
        <div className='skills'>
            <img src="images/fotoPrueba.jpg" alt="" />

            <div className='skills-description'>
                <div className='loading-bar'>
                    <div className='loading' style={width}></div>
                </div>

                <div className='skill-name'>
                    <span className='name'>HTML</span>

                    <span className='percentage'>{porcentaje}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsContent