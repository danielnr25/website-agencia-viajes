import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Image from "../assets/night.jpg"
import Trip from "../pages/Trip"

function Service() {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero-mid"
      img={Image}
      title="Service"
      btnClass="hide"
    />
    
    <Trip />
    </>
  )
}

export default Service