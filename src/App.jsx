import "./app.scss";
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import About from "./Components/aboutDetail/About";
const App = () => {
  return (
    <div>
      {/* <Cursor/> */}
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <Parallax />
      </section>
      <section id="skill">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>

      <Portfolio id="project" />
      <section id="contact">
        <Contact />
        {/* <Form/> */}
      </section>
    </div>
  );
};

export default App;
