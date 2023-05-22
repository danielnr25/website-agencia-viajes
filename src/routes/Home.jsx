import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Image from "../assets/12.jpg"
import Destination from "../pages/Destination"
import Trip from "../pages/Trip"

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        img={Image}
        title="Tu viaje - Tu historia"
        text="Elige tu destino favorito"
        btnText="Planifica tu viaje"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </>
  )
}

export default Home