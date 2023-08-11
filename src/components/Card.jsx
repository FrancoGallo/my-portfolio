import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestoreApp } from '../db/dbFirebase';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

getFirestoreApp() // By hosting it here the database can only be loaded in the 'Card.jsx' section

const Card = () => {
  const [data, setData] = useState([])
  const { idTag } = useParams()

  useEffect(() => {
    const dataBase = getFirestore()

    if (idTag) {
      const queryCollection = query(collection(dataBase, 'app'), where('tag', '==', idTag))

        getDocs(queryCollection)
          .then((answer) => {
            setData(answer.docs.map(app => ({id: app.id, ...app.data()})))
          })
      } 
      
    else {
      const queryCollection = collection(dataBase, 'app')
            
        getDocs(queryCollection)
          .then((answer) => {
            setData(answer.docs.map(app => ({id: app.id, ...app.data()})))
          })
      }
  }, [idTag])

  return (
    <>
      {data.map((data) => (
          <section className='card-style-container' key={data.id}>
            <div className='div-style-image'>
              <img src={data.img} alt={data.titleProject} />
            </div>
        
            <div className='div-style-description'>
              <a href={data.appUrl}>Enlace al proyecto</a>
              <p>
                <b>{data.titleProject}</b> 
                <br></br>
                {data.description}
              </p>
              <a href={data.codeUrl}>Enlace al GitHub</a>
            </div>
          </section>
        ))
      }
    </>
  )
}

export default Card