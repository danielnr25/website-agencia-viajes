import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Image from "../assets/2.jpg"
import ContactUs from "../pages/ContactUs"

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        img={Image}
        title="Contact"
        btnClass="hide"
      />

      <ContactUs /> 
    </>
  )
}

export default Contact