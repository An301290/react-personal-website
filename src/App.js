import { useState } from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

//skills sets
//https://codepen.io/faelplg/pen/MWwxred
