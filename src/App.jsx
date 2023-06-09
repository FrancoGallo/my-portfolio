import Footer from "./components/Footer";
import Networks from "./components/Networks";
import Form from "./components/Form";
import Card from "./components/Card";
import Photos from "./components/Photos";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <header>
        <NavBar/>
      </header>

      <article id="start">
        <HelloWorld/>

        <Photos/>
      </article>

      <article id="projects">
        <h2>Proyectos</h2>

        <Card/>
      </article>

      <article id="contact">
        <h2>Contacto</h2>
        
        <Form/>

        <Networks/>
      </article>

      <Footer/> 
    </>  
  );
}

export default App;