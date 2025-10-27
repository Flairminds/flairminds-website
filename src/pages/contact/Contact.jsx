import ContactForm from "../../components/contactForm/ContactForm"
import contactStyles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={contactStyles.main}>
      <h1 className={contactStyles.contact_heading}>Get in touch</h1>
      <div className={contactStyles.container} >
      <ContactForm/>
      </div>
    </div>
  )
}

export default Contact