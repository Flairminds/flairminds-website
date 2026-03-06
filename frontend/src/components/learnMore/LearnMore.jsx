import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import dropDownStyles from './LearnMore.module.css'
import { useDispatch } from 'react-redux';
import { setDemoLink, setShareLink, toggleModal } from '../../redux/slices/visitorDetailsModalSlice';

const LearnMore = ({prop}) => {
    const [activeDropdown,setActiveDropDown]=useState(false)
     const dispatch=useDispatch()
    const toggleDropdown=()=>{
        setActiveDropDown(!activeDropdown)
      }
  return (
    <>
              <div className={dropDownStyles.chatbot}>
                <div className={`${dropDownStyles.chatbot_top} ${dropDownStyles.no_select} ${activeDropdown?dropDownStyles.active_chatbot_top:dropDownStyles.inactive_chatbot_top}`} onClick={()=>toggleDropdown()}> 
                    <p>Learn More</p>
                    <RiArrowDropDownLine className={dropDownStyles.dropdown_icon}/>
                </div>
                <div className={dropDownStyles.dropdown_container}>
                <div className={`${dropDownStyles.chatbot_body} ${activeDropdown?dropDownStyles.active_dropdown:dropDownStyles.inactive_dropdown}`}>
                  <ul>
                        {prop?.demoButton&&<li className={dropDownStyles.chatbot_list} onClick={() => { dispatch(setDemoLink({ demoLink: prop.demoLink })); dispatch(toggleModal({ interest: prop.name, redirectUrl: null })); }} >View Demo</li>}
                        <li className={dropDownStyles.chatbot_list} onClick={() => {dispatch(setShareLink({ shareName: prop.linkDisplay }))}}>Share Link</li>
                  </ul>
                </div>
                </div>
              </div>
    </>
  )
}

export default LearnMore