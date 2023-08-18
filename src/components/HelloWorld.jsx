import { useState } from 'react'
import Modal from './Modal'

const HelloWorld = () => {
  const [certificates, setCertificates] = useState([
    { id: '1', content: 'images/html.png', alt: 'Certificate HTML and CSS' },
    { id: '2', content: 'images/javascript.png', alt: 'Certificate JavaScript' },
    { id: '3', content: 'images/react.png', alt: 'Certificate React' },
    { id: '4', content: 'images/frontend react.png', alt: 'Certificate FrontEnd React' },
  ]);

  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalId) => {
    setCurrentModal(modalId);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <div className='helloWorld-style'>
      <h2>¡Hola mundo!</h2>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed labore ducimus quasi dolores. Voluptatibus, obcaecati rerum! Vitae, ducimus quis placeat deserunt sequi illum a dolorum est impedit, mollitia modi?
        Harum tenetur dolorem illum iste quis ipsa ex magnam commodi a molestiae ipsam possimus rerum aliquid, maxime autem ad minima! Laudantium nesciunt accusantium sit! Quo dolore recusandae debitis facere delectus?
        Sequi est dignissimos accusantium nam dicta voluptatibus blanditiis esse modi rerum sed aliquid animi, sint delectus natus magni saepe sapiente. Harum at fuga deleniti, voluptatem minus ipsam quod omnis corrupti.
      </p>

      <div className='imgCertificate-container'>
        {certificates.map((cer) => (
          <div className='imgCertificate' key={cer.id}>
            <img className='img-style' onClick={() => openModal(cer.id)} src={cer.content} alt={cer.alt} />

            {currentModal === cer.id && (
              <Modal closeModal={closeModal} img={cer.content} alt={cer.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HelloWorld