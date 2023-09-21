import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
function App() {
  
  return (
    <div  >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
