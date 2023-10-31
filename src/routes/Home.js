import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Your Journey Your Story"
        text="  choose Your Favourite Destination "
        heroImg="https://media.istockphoto.com/id/1208368574/photo/a-man-standing-next-to-the-milky-way-galaxy.jpg?s=612x612&w=0&k=20&c=3R_6daVgRJ_a7Es5_weqO0IhqbpszPF3UFTLm6NABdQ="
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
