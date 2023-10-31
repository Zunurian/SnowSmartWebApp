import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/Service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Services"
        heroImg={AboutImg}
        btnClass="hide"
      />

      <Trip />
      <Footer />
    </>
  );
}

export default Service;
