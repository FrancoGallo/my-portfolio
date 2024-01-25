import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const SkillsContent = () => {
    const [data, setData] = useState([])
    const { idTag } = useParams()
  
    useEffect(() => {
      const dataBase = getFirestore()
  
      if (idTag) {
        const queryCollection = query(collection(dataBase, 'skills'), where('tag', '==', idTag))
  
          getDocs(queryCollection)
            .then((answer) => {
              setData(answer.docs.map(app => ({id: app.id, ...app.data()})))
            })
        } 
        
        else {
        const queryCollection = collection(dataBase, 'skills')
              
            getDocs(queryCollection)
            .then((answer) => {
                setData(answer.docs.map(app => ({id: app.id, ...app.data()})))
            })
        }
    }, [idTag])

  return (
  <div className='skills-content'>
    {data.map((data) => {
        return (
            <motion.div className='skills' key={data.name}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 56 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
            >

                <img src={data.img} alt={data.name} />
    
                <div className='skills-description'>
                    <div className='loading-bar'>
                        <div className='loading' style={{ width: data.percentage }}></div>
                    </div>
    
                    <div className='skill-name'>
                        <span className='name'>{data.name}</span>
    
                        <span className='percentage'>{data.percentage}</span>
                    </div>
                </div>
            </motion.div>
        )
    })}
  </div>
  )
}

export default SkillsContent