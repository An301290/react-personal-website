import { useState } from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";

console.log(process.env);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Resume />
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
