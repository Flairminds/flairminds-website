import React,{useState} from 'react'
import rolesStyles from './Roles.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Roles = ({roles,select,selectedRole,activeDropdown,setActiveDropDown}) => {
  
      const selectRole=(roleId,rolename)=>{
        select({roleId,rolename})
        setActiveDropDown(false)
      }
  return (
    <div className={rolesStyles.chatbot}>
                    <div className={`${rolesStyles.chatbot_top} ${rolesStyles.no_select} ${activeDropdown?rolesStyles.active_chatbot_top:rolesStyles.inactive_chatbot_top}`} onClick={()=>setActiveDropDown(!activeDropdown)}> 
                        <p>{selectedRole?selectedRole.rolename:"Select Role"}</p>
                        <RiArrowDropDownLine className={rolesStyles.dropdown_icon}/>
                    </div>
                    <div className={rolesStyles.dropdown_container}>
                    <div className={`${rolesStyles.chatbot_body} ${activeDropdown?rolesStyles.active_dropdown:rolesStyles.inactive_dropdown}`}>
                      <ul>
                        {(!roles||roles.length===0)&&<li className={`${rolesStyles.chatbot_list}`}>No roles</li>}
                        {roles?.map((role)=> 
                            <li key={role.id} className={`${rolesStyles.chatbot_list}`} onClick={()=>selectRole(role.id,role.rolename)}>{role.rolename}</li>
                        )}
                      </ul>
                    </div>
                    </div>
                  </div>
  )
}

export default Roles