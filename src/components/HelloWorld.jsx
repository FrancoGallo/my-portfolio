import { useState } from 'react'
import Modal from './Modal'

const HelloWorld = () => {
  const [modal1, cambioModal1] = useState (false)
  const [modal2, cambioModal2] = useState (false)
  const [modal3, cambioModal3] = useState (false)
  const [modal4, cambioModal4] = useState (false)

  const img1 = 'images/html.png'
  const img2 = 'images/javascript.png'
  const img3 = 'images/react.png'
  const img4 = 'images/frontend react.png'

  return (
    <div className='helloWorld-style'>
      <h2>¡Hola mundo!</h2>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed labore ducimus quasi dolores. Voluptatibus, obcaecati rerum! Vitae, ducimus quis placeat deserunt sequi illum a dolorum est impedit, mollitia modi?
        Harum tenetur dolorem illum iste quis ipsa ex magnam commodi a molestiae ipsam possimus rerum aliquid, maxime autem ad minima! Laudantium nesciunt accusantium sit! Quo dolore recusandae debitis facere delectus?
        Sequi est dignissimos accusantium nam dicta voluptatibus blanditiis esse modi rerum sed aliquid animi, sint delectus natus magni saepe sapiente. Harum at fuga deleniti, voluptatem minus ipsam quod omnis corrupti.
      </p>

      <div className='imgCertificate-container'>
        <img onClick={() => cambioModal1 (true)} src={img1} alt="Certificate HTML and CSS" />
        <img onClick={() => cambioModal2 (true)} src={img2} alt="Certificate JavaScript" />
        <img onClick={() => cambioModal3 (true)} src={img3} alt="Certificate React" />
        <img onClick={() => cambioModal4 (true)} src={img4} alt="Certificate FrontEnd React" />
      </div>

      <Modal img={img1} modalState={modal1} modalChange={cambioModal1}/>
      <Modal img={img2} modalState={modal2} modalChange={cambioModal2}/>
      <Modal img={img3} modalState={modal3} modalChange={cambioModal3}/>
      <Modal img={img4} modalState={modal4} modalChange={cambioModal4}/>
    </div>
  )
}

export default HelloWorld