import Footer from "./components/Section_Footer/Footer";
import Networks from "./components/Section_Contact/Networks";
import EmailForm from "./components/Section_Contact/EmailForm";
import Card from "./components/Section_Projects/Card";
import HelloWorld from "./components/Section_Start/HelloWorld";
import NavBar from "./components/Section_Header/NavBar";
import Location from "./components/Section_Contact/Location";

// import Skills from "./components/Section_Start/Skills";

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

        {/* <Skills/> */}
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