import React from 'react'
import userDetailModalStyles from './UserDetailsModal.module.css'
import ContactForm from '../contactForm/ContactForm'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/slices/visitorDetailsModalSlice';
import { redirect } from 'react-router-dom';
const UserDetailsModal = () => {
  const dispatch=useDispatch()
  return (
    <div className={userDetailModalStyles.user_details_modal}>
        <div className={userDetailModalStyles.user_details_modal_inner_container}>
        <RxCross2 className={userDetailModalStyles.collapse_modal_icon} onClick={()=>dispatch(toggleModal({interest:null,redirectUrl:null}))}/>
        <ContactForm/>
        </div>
    </div>
  )
}

export default UserDetailsModal