import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <h1>PORTAFOLIO</h1>
      <Navbar>
        <Hero />
      </Navbar>
    </>
  );
}

export default App;