import React from 'react'
import skills from './SkillsArray'
import { motion } from "framer-motion"

const SkillsContent = () => {

  return (
  <div className='skills-content'>
    {skills.map((skill) => {
        return (
            <motion.div className='skills' key={skill.name}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 56 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
            >
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
            </motion.div>
        )
    })}
  </div>
  )
}

export default SkillsContent