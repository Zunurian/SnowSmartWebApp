import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/About.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" title="About" heroImg={AboutImg} btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
