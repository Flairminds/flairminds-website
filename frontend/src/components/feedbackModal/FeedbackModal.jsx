import React,{useEffect, useState} from 'react'
import feedbackModalStyles from './FeedbackModal.module.css'
import { RxCross2 } from "react-icons/rx";
import { useDispatch,useSelector } from 'react-redux';
import { toggleFeedbackModal } from '../../redux/slices/visitorDetailsModalSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FeedbackModal = () => {
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const {interest,redirectUrl}=useSelector(state=>state.visitorDetailsModal)
    const [feedbackDetails,setFeedbackDetails]=useState({name:"",email:"",message:""})
    const [submitted,setSubmitted]=useState()
    const [incompleteInputs,setIncompleteInputs]=useState(false)
    const [invalidEmail,setInvalidEmail]=useState(false)
    const [submitting,setSubmitting]=useState(false)
    const [error,setError]=useState(false)
    const pathname=window.location.pathname
    const dispatch=useDispatch()
    const handleInputChange=(e)=>{
      e.preventDefault()
      setIncompleteInputs(false)
      setInvalidEmail(false)
      const {name,value}=e.target
      setFeedbackDetails({...feedbackDetails,[name]:value})
    }
    const validInputs=()=>{
      const {name,email,message}=feedbackDetails
        if(!name||!email||!message){
          return false
        }else{
          return true
        }
    }
    const validEmail=()=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
        return emailRegex.test(feedbackDetails.email);
  
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!validEmail()){
        setInvalidEmail(true)
        return
      }
      if(!validInputs()){
        setIncompleteInputs(true)
        return
      }
      try {
        setSubmitting(true)
        const response=await axios.post(`${baseUrl}/visitors/feedback`,feedbackDetails,{headers:{Accept:'application/json'}})
        setSubmitted(true)
        setTimeout(()=>{
          dispatch(toggleFeedbackModal())
        },1000)
        setSubmitting(false)
      } catch (error) {
        setError(true)
      }
    }
  return (
    <>
    <div className={feedbackModalStyles.main}>
        <div className={feedbackModalStyles.inner_container}>
            <RxCross2 className={feedbackModalStyles.collapse_modal_icon} onClick={()=>dispatch(toggleFeedbackModal())}/>
            <form action="" className={feedbackModalStyles.feedback_form}>
            <p className={feedbackModalStyles.feedback_form_heading}>Your Feedback Matters!</p>
            <div className={feedbackModalStyles.label}>
              <label htmlFor="name">Full Name</label>
            <input required={true} type="text" name='name' id='name' className='' value={feedbackDetails.name} placeholder='Name' onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className={feedbackModalStyles.label}>
            {invalidEmail&&<p className={feedbackModalStyles.error_message}>Email Address</p>}
            <label htmlFor="email">Enter Email</label>
            <input required={true} type="email" name='email' id='email' className='' value={feedbackDetails.email} placeholder='Email' onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className={feedbackModalStyles.label}>
              <label htmlFor="message">Message</label>
            <textarea required={true}  name='message' id='name' rows={10} className='' value={feedbackDetails.message} placeholder='Message' onChange={(e)=>handleInputChange(e)}/>
            </div>
            <button type="submit" className={feedbackModalStyles.form_submit_button} onClick={(e)=>{handleSubmit(e)}} >
            {(!submitting)&&"Submit"}
              {(submitting)&&"Submitting..."}
              </button>
            </form>
            {submitted&&<p className={feedbackModalStyles.submit_message}>Thank you for your feedback! We appreciate your input.</p>}
        </div>
    </div>
   
    </>
  )
}

export default FeedbackModal