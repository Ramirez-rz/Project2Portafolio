import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <>
        <Navbar/>
          <Outlet /> 
    </>

      
  );
}

export default App;