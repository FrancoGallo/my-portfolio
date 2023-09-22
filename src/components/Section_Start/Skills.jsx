import { useState } from 'react'
import SkillsContent from './SkillsContent';
import { AnimatePresence} from 'framer-motion';
import Arrow from './Arrow';

const Skills = () => {
  const [content, setContent] = useState(false)
  const toggle = () => setContent(!content);

  return (
    <section className='skills-container' >
      <div className='skills-btn' onClick={toggle}>
        <Arrow prop={content} />

        <h3>Tecnologías</h3>

        <Arrow prop={content} />
      </div>

      <AnimatePresence>
        {content && <SkillsContent />}
      </AnimatePresence>
    </section>
  )
}

export default Skills