import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import learnMoreStyles from './Dropdown.module.css'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/slices/visitorDetailsModalSlice';

const Dropdown = ({ chatbot }) => {
  const [activeDropdown, setActiveDropDown] = useState(false)
  const dispatch = useDispatch()
  const toggleDropdown = () => {
    setActiveDropDown(!activeDropdown)
  }
  return (
    <>
      <div className={learnMoreStyles.chatbot}>
        <div className={`${learnMoreStyles.chatbot_top} ${learnMoreStyles.no_select} ${activeDropdown ? learnMoreStyles.active_chatbot_top : learnMoreStyles.inactive_chatbot_top}`} onClick={() => toggleDropdown()}>
          Try Chatbots
          <RiArrowDropDownLine className={learnMoreStyles.dropdown_icon} />
        </div>
        <div className={learnMoreStyles.dropdown_container}>
          <div className={`${learnMoreStyles.chatbot_body} ${activeDropdown ? learnMoreStyles.active_dropdown : learnMoreStyles.inactive_dropdown}`}>
            <ul>
              {chatbot.map((chat) =>
                <li key={chat.id} className={learnMoreStyles.chatbot_list} onClick={() => { window.open(chat.link) }} >{chat.text}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown