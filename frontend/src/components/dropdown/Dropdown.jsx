import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import learnMoreStyles from "./Dropdown.module.css";

const Dropdown = ({ chatbot = [] }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleItemClick = (link) => {
    window.open(link, "_blank");
    setActiveDropdown(false);
  };

  return (
    <div
      className={learnMoreStyles.chatbot}
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      {/* Button */}
      <button
        className={`${learnMoreStyles.chatbot_top} ${
          activeDropdown ? learnMoreStyles.active_chatbot_top : ""
        }`}
      >
        Try Chatbots
        <RiArrowDropDownLine
          className={`${learnMoreStyles.dropdown_icon} ${
            activeDropdown ? learnMoreStyles.rotate_icon : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`${learnMoreStyles.chatbot_body} ${
          activeDropdown
            ? learnMoreStyles.active_dropdown
            : learnMoreStyles.inactive_dropdown
        }`}
      >
        <ul>
          {chatbot.map((chat) => (
            <li
              key={chat.id}
              className={learnMoreStyles.chatbot_list}
              onClick={() => handleItemClick(chat.link)}
            >
              {chat.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
