import React from 'react'

const SkillsContent = ( { content } ) => {

  const skills = [
    {name: 'HTML', img: 'images/iconHTML.svg', porcentaje: '80%', width: {width:'80%'}},
    {name: 'CSS', img: 'images/iconCSS.svg', porcentaje: '30%', width: {width:'30%'}},
    {name: 'SASS', img: 'images/iconSASS.svg', porcentaje: '30%', width: {width:'30%'}},
    {name: 'Bootstrap', img: 'images/iconBootstrap.svg', porcentaje: '30%', width: {width:'30%'}},
    {name: 'JavaScript', img: 'images/iconJavaScript.svg', porcentaje: '30%', width: {width:'30%'}},
    {name: 'React', img: 'images/iconReact.svg', porcentaje: '30%', width: {width:'30%'}},
    {name: 'Firebase', img: 'images/iconFirebase.svg', porcentaje: '30%', width: {width:'30%'}}
  ]

  return (
    <div className={content ? 'skills-content' : 'skills-content-none'}>
    {skills.map((skill) => {
        return (
            <div className='skills' key={skill.name}>
                <img src={skill.img} alt={skill.name} />
    
                <div className='skills-description'>
                    <div className='loading-bar'>
                        <div className='loading' style={skill.width}></div>
                    </div>
    
                    <div className='skill-name'>
                        <span className='name'>{skill.name}</span>
    
                        <span className='percentage'>{skill.porcentaje}</span>
                    </div>
                </div>
            </div>
        )
    })}
    </div>
  )
}

export default SkillsContent