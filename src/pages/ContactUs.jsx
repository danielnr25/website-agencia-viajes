import '../styles/Contact.css'

function ContactUs() {
  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder='message' name="" id="" cols="30" rows="10">
        </textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default ContactUs