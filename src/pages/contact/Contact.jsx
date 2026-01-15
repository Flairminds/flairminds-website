import ContactForm from "../../components/contactForm/ContactForm"
import contactStyles from "./Contact.module.css"
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaSyncAlt } from 'react-icons/fa'

const Contact = () => {
  const contactOptions = [
    {
      id: "COMM_VOICE_01",
      icon: <FaPhone size={24} />,
      label: '+91 9420281731',
      link: 'tel:+919420281731',
      ariaLabel: 'Call us'
    },
    {
      id: "COMM_WAPP_02",
      icon: <FaWhatsapp size={30} />,
      label: 'WhatsApp Support',
      link: 'https://wa.me/919420281731',
      ariaLabel: 'Contact us on WhatsApp'
    },
    {
      id: "COMM_MAIL_HR",
      icon: <FaEnvelope size={24} />,
      label: 'hr@flairminds.com',
      link: 'mailto:hr@flairminds.com',
      ariaLabel: 'Send us an email to HR'
    },
    {
      id: "COMM_MAIL_SALES",
      icon: <FaEnvelope size={24} />,
      label: 'sales@flairminds.com',
      link: 'mailto:sales@flairminds.com',
      ariaLabel: 'Send us an email to Sales'
    },
    {
      id: "COMM_LN_04",
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn Official',
      link: 'https://www.linkedin.com/company/flairmindssoftware',
      ariaLabel: 'Connect with us on LinkedIn'
    }
  ]

  const officeLocations = [
    {
      id: "LOC_PUNE_HQ",
      title: 'PUNE OFFICE LOCATION',
      address: <><div>FlairMinds Software Pvt. Ltd.</div><div>The Office Club, Alluring Sky,</div><div>near Vimal Darshan Society, Vidhate Colony, <div>New D.P. Road, Aundh</div><div>Pune, Maharashtra 411007</div></div></>
    }
  ]

  return (
    <div className={contactStyles.main}>
      {/* Executive Hero Banner */}
      <section className={contactStyles.heroSection}>
        <div className={contactStyles.heroContent}>
          <div className={contactStyles.systemStatus}>
            <span className={contactStyles.statusDot}></span> COMM_CHANNEL_ACTIVE // GLOBAL_READY
          </div>
          <h1 className={contactStyles.contact_heading}>CONNECT WITH US</h1>
          <p className={contactStyles.heroDescription}>
            Looking to transform your business through expert software engineering and AI?
            Reach out to our executive team to initiate a strategic partnership.
          </p>
        </div>
      </section>

      <div className={contactStyles.contentWrapper}>
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
              <div className={contactStyles.cardHeader}>
                <span className={contactStyles.syncId}>SYNC_ID: {option.id}</span>
                <FaSyncAlt className={contactStyles.syncIcon} />
              </div>
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
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FlairMinds Pune Office Location"
              ></iframe>
            </div>
            <div className={contactStyles.locationAddresses}>
              {officeLocations.map((location, index) => (
                <div key={index} className={contactStyles.locationItem}>
                  <div className={contactStyles.locationDetails}>
                    <div className={contactStyles.locHeader}>
                      <span className={contactStyles.locId}>{location.id}</span>
                    </div>
                    <h3 className={contactStyles.locationTitle}>{location.title}</h3>
                    <p className={contactStyles.locationAddress}>{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={contactStyles.formSection}>
          <div className={contactStyles.formHeader}>
            <span className={contactStyles.subTag}>// INITIATE_PARTNERSHIP</span>
            <h2 className={contactStyles.formTitle}>Strategic Inquiry</h2>
          </div>
          <div className={contactStyles.formWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact