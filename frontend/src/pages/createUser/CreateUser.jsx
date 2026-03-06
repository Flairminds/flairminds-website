import React, { useEffect, useState } from 'react'
import createUserStyles from './CreateUser.module.css'
import logo from "../../assets/flairminds-logo.png"
import axios from 'axios'
import Roles from '../../components/roles/Roles'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
const CreateUser = () => {
  const navigate=useNavigate()
  const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
  const [userDetails,setUserDetails]=useState({})
  const [incompleteDetails,setIncompleteDetails]=useState(false)
  const [passwordConfirmationError,setPasswordConfirmationError]=useState(false)
  const [alreadyExists,setAlreadyExists]=useState(false)
  const [created,setCreated]=useState(false)
  const [roles,setRoles]=useState(null)
  const [roleInput,setRoleInput]=useState({})
  const [selectedRole,setSelectedRole]=useState(null)
  const [addingRole,setAddingRole]=useState(false)
  const [activeDropdown,setActiveDropDown]=useState(false)
  const [roleAlreadyExists,setRoleAlreadyExists]=useState()
  useEffect(()=>{
    getRoles()
  },[])
  const handleInputChange=(e)=>{
    e.preventDefault()
    setIncompleteDetails(false)
    setPasswordConfirmationError(false)
    setAlreadyExists(false)
    const {name,value}=e.target
    setUserDetails({...userDetails,[name]:value})
  }
  const handleRoleInput=(e)=>{
    e.preventDefault();
    const {name,value}= e.target
    setRoleInput({...roleInput,[name]:value})
  }
  const createUser=async(e)=>{
    e.preventDefault()
    const {name,email,password,cpassword}=userDetails
    if(!name||!email||!password||!cpassword||!selectedRole){
      setIncompleteDetails(true)
      return
    }
    if(password!==cpassword){
      setPasswordConfirmationError(true)
      return
    }
    try {
      userDetails.roleId=selectedRole?.roleId;
      const response=await axios.post(`${baseUrl}/admin/create-user`,userDetails,{withCredentials:true, headers:{Accept:'application/json',"Content-Type":"application/json"}})
      setCreated(true)
      navigate('/dashboard/users')
    } catch (error) {
      if(error.status===409){
        setAlreadyExists(true)
      }
    }
  }
  const getRoles= async()=>{
    try {
      const response=await axios.get(`${baseUrl}/admin/get-roles`,{withCredentials:true,headers:{Accept:"application/json","Content-Type":"application/json"}})
      setRoles(response.data.roles)
    } catch (error) {
    }
  }
  const createRole=async(e)=>{
    e.preventDefault()
    try {
      await axios.post(`${baseUrl}/admin/create-role`,roleInput,{withCredentials:true,headers:{Accept:"application/json","Content-Type":"application/json"}})
      await getRoles()
      setAddingRole(false)
    } catch (error) {
      error.status===409&&setRoleAlreadyExists(true)
    }
  }
  return (
    <div className={`${createUserStyles.signup_page}`} onClick={()=>{activeDropdown&&setActiveDropDown(false)}}>
      <div className={`${createUserStyles.signup_form_container}`}>
          <img src={logo} alt="logo" width={200}/>
          {created?<>
            <div className={`${createUserStyles.created}`}></div>
          </>:<>
            <form action="" className={`${createUserStyles.signup_form}`}>
          {incompleteDetails&&<p className={`${createUserStyles.error_message}`}>All fields are mandatory.</p>}
          {alreadyExists&&<p className={`${createUserStyles.error_message}`}>A user with this email already exists.</p>}
          <div className={createUserStyles.input_container}>
            <label htmlFor="name">Name</label>
            <input  onChange={(e)=>{handleInputChange(e)}} type="text" name='name' id='name' placeholder='Enter Name' />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>{handleInputChange(e)}}  type="email" name='email' id='email' placeholder='Enter Email' />
            </div>
            <div>
              <div className={`${createUserStyles.roles_container}`}>
            <Roles roles={roles} select={setSelectedRole} selectedRole={selectedRole} activeDropdown={activeDropdown} setActiveDropDown={setActiveDropDown}/>
            <button onClick={(e)=>{e.preventDefault();setAddingRole(true)}}>Add new role</button>
            </div>
            <input onChange={(e)=>{handleInputChange(e)}}  type='hidden' name='roleId' id='roleId' placeholder='Enter Role' />
            </div>
            <div>
              <label htmlFor="password" >Password</label>
              <input onChange={(e)=>{handleInputChange(e)}}  type="password" name="password" id="password" placeholder='Enter Password' />
            </div>
            <div>
              <label htmlFor="cpassword" >Confirm Password</label>
              <input className={`${passwordConfirmationError&&createUserStyles.input_error}`} onChange={(e)=>{handleInputChange(e)}}  type="password" name="cpassword" id="cpassword" placeholder='Confirm Password' />
            </div>
            <button onClick={(e)=>{createUser(e)}}>Create User</button>
        </form>
          </>}
        </div>
        {addingRole&&<div className={`${createUserStyles.add_role_modal}`}>
          <div className={`${createUserStyles.add_role_inner_container}`}>
            <div className={`${createUserStyles.role_details}`}>
            <label htmlFor="rolename">Role</label>
            <input onChange={(e)=>{handleRoleInput(e)}} type="text" name="rolename" id="rolename" />
            {roleAlreadyExists&&<p className={`${createUserStyles.error_message}`}>This role already exists.</p>} 
            </div>
            <button onClick={(e)=>{createRole(e)}}>Create Role</button>
            <RxCross2 className={`${createUserStyles.collapse_modal_icon}`} onClick={()=>{setAddingRole(false)}}/>
          </div>
        </div>}
        
    </div>
  )
}

export default CreateUser