import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Contact"
        heroImg={AboutImg}
        btnClass="hide"
      />

      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
