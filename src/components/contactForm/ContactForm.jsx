import React, { useState } from 'react'
import contactFormStyles from "./ContactForm.module.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setDemoLink, toggleDemoModal, toggleFeedbackModal, toggleModal } from '../../redux/slices/visitorDetailsModalSlice'

const ContactForm = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
  const { open, interest, redirectUrl, demoLink } = useSelector(state => state.visitorDetailsModal)
  const [visitorDetails, setVisitorDetails] = useState({ interest: interest })
  const [submitResponse, setSubmitResponse] = useState()
  const [incompleteInputs, setIncompleteInputs] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const pathname = window.location.pathname
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    e.preventDefault()
    setIncompleteInputs(false)
    setInvalidEmail(false)
    const { name, value } = e.target
    setVisitorDetails({ ...visitorDetails, [name]: value })
  }
  const validInputs = () => {
    const { name, phone, email, industry, organization } = visitorDetails
    if (!name || !phone || !email) {
      return false
    } else {
      return true
    }
  }
  const validEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(visitorDetails.email);

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validEmail()) {
      setInvalidEmail(true)
      return
    }
    if (!validInputs()) {
      setIncompleteInputs(true)
      return
    }
    try {
      setSubmitting(true)
      const response = await axios.post(`${baseUrl}/visitors/enter-visitor`, visitorDetails, { headers: { Accept: 'application/json', "Content-Type": "application/json" } })
      redirectUrl && (window.location.href = redirectUrl)
      setVisitorDetails({ name: "", phone: "", email: "", industry: "", organization: "" })
      setSubmitResponse(response.data)
      setSubmitting(false)
      dispatch(toggleModal({ interest: null, redirectUrl: null }))
      demoLink && dispatch(toggleDemoModal())
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div className={contactFormStyles.contact_form_container}>
      {!(pathname === '/contact') && <p className={contactFormStyles.contact_form_heading}>let us know about you</p>}
      {incompleteInputs && <p className={contactFormStyles.error_message}>All the inputs are mandatory</p>}
      {error && <p className={contactFormStyles.error_message}>Something's wrong on our end</p>}
      <form action="" className={contactFormStyles.contact_form}>
        {open && <><input type="hidden" name="interest" id='interest' value={interest} />
        </>}
        <div className={contactFormStyles.label}>
          <label htmlFor="name">*Full Name</label>
          <input required={true} type="text" name='name' id='name' className='' value={visitorDetails.name} placeholder='Name' onChange={(e) => handleInputChange(e)} />
        </div>
        <div className={contactFormStyles.label}>
          <label htmlFor="phone">*Contact Number</label>
          <input required={true} type="text" name='phone' id='phone' className='' value={visitorDetails.phone} placeholder='Contact Number' onChange={(e) => handleInputChange(e)} />
        </div>
        <div className={contactFormStyles.label}>
          {invalidEmail && <p className={contactFormStyles.error_message}>Email Address</p>}
          <label htmlFor="email">*Email</label>
          <input required={true} type="email" name='email' id='email' className='' value={visitorDetails.email} placeholder='Email' onChange={(e) => handleInputChange(e)} />
        </div>
        {/* <div className={contactFormStyles.label}>
            <label htmlFor="industry">Industry</label>
            <input required={true} type="text" name='industry' id='industry' className='' value={visitorDetails.industry} placeholder='Industry' onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className={contactFormStyles.label}>
            <label htmlFor="organization">Organization</label>
            <input required={true} type="text" name='organization' id='organization' className='' value={visitorDetails.organization} placeholder='Organization' onChange={(e)=>handleInputChange(e)}/>
            </div> */}
        <button type="submit" className={contactFormStyles.form_submit_button} onClick={(e) => { handleSubmit(e) }} >
          {(pathname === "/contact" && !submitting) && "Submit"}
          {(pathname === "/contact" && submitting) && "Submitting..."}
          {(!(pathname === "/contact") && submitting) && "Redirecting..."}
          {(!(pathname === "/contact") && !submitting) && "Continue"}
        </button>
      </form>
      {submitResponse && <h3 className={contactFormStyles.submit_message}>{submitResponse.message}</h3>}
    </div>
  )
}

export default ContactForm
