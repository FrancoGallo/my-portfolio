import Footer from "./components/Footer";
import Networks from "./components/Networks";
import Form from "./components/Form";
import Card from "./components/Card";
import Photos from "./components/Photos";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";

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
        <Card/>
      </article>

      <article id="contact">
        <Form/>

        <Networks/>
      </article>

      <Footer/>
    </>
  );
}

export default App;