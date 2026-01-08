import ContactForm from "../../components/contactForm/ContactForm"
import contactStyles from "./Contact.module.css"
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactOptions = [
    {
      icon: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaPhone size={24} />
        <div>or</div>
        <FaWhatsapp size={30} />
      </div>,
      label: '+91 9420281731',
      link: 'https://wa.me/919420281731',
      ariaLabel: 'Contact us on WhatsApp'
    },
    {
      icon: <FaEnvelope size={30} />,
      label: 'hr@flairminds.com',
      link: 'mailto:hr@flairminds.com',
      ariaLabel: 'Send us an email'
    },
    {
      icon: <FaLinkedin size={30} />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/flairmindssoftware',
      ariaLabel: 'Connect with us on LinkedIn'
    }
  ]

  const officeLocations = [
    {
      title: 'PUNE OFFICE LOCATION',
      address: <><div>FlairMinds Software Pvt. Ltd.</div><div>near Vimal Darshan Society, Vidhate Colony, <div>New D.P. Road, Aundh</div><div>Pune, Maharashtra 411007</div></div></>
    }
  ]

  return (
    <div className={contactStyles.main}>
      <h1 className={contactStyles.contact_heading}>Contact Us</h1>
      <div>
        <div className={contactStyles.contactOptions}>
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className={contactStyles.contactOption}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={option.ariaLabel}
            >
              <div className={contactStyles.iconWrapper}>
                {option.icon}
              </div>
              <p className={contactStyles.label}>{option.label}</p>
            </a>
          ))}
        </div>

        {/* Location Section */}
        <div className={contactStyles.locationSection}>
          <div className={contactStyles.locationContent}>
            <div className={contactStyles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.1463722580552!2d73.79956908312168!3d18.563647092397833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa4b389d3d5%3A0x5d075cfa42040980!2sFlairminds%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1767854889282!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FlairMinds Pune Office Location"
              ></iframe>
            </div>
            <div className={contactStyles.locationAddresses}>
              {officeLocations.map((location, index) => (
                <div key={index} className={contactStyles.locationItem}>
                  {/* <div className={contactStyles.locationIcon}>
                    <FaMapMarkerAlt />
                  </div> */}
                  <div className={contactStyles.locationDetails}>
                    <h3 className={contactStyles.locationTitle}>{location.title}</h3>
                    <p className={contactStyles.locationAddress}>{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '700px', margin: '5rem auto 0 auto' }} >
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact