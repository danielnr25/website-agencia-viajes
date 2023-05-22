import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Image from "../assets/night.jpg"
import AboutUs from "../pages/AboutUs"

function About() {
  return (
    <>
     <Navbar />
     <Hero
        cName = "hero-mid"
        img = {Image}
        title = "About Us"
        btnClass = "hide"
      />
      <AboutUs />
    </>
  )
}

export default About