import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutMe from "../component/AboutMe";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
