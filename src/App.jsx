import Footer from "./components/Footer";
import Networks from "./components/Networks";
import EmailForm from "./components/EmailForm";
import Card from "./components/Card";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import Location from "./components/Location";
import Skills from "./components/Skills";

function App() {
  return (
    <>
     <header>
        <NavBar/>
      </header>

      <article id="start">
        <section className="helloWorld-style-container">
          <HelloWorld/>

          <img className="profilePhoto-style" src="images/fotoPrueba.jpg" alt="My face" />
        </section>

        <Skills/>
      </article>

      <article id="projects">
        <h2>Proyectos</h2>

        <Card/>
      </article>

      <article id="contact">
        <h2>Contacto</h2>

        <section>
          <EmailForm/>

          <div>
            <Networks/> 

            <Location/>
          </div>
        </section>
      </article>

      <Footer/> 
    </>  
  );
}

export default App;