import React, { useState } from 'react'
import loginStyles from './Login.module.css'
import logo from "../../assets/flairminds-logo.png"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { auth } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Login = () => {
  const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [loginDetails,setLoginDetails]=useState({})
  const [incompleteDetails,setIncompleteDetails]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email,setEmail]=useState()
  const [noUserFound,setNoUserFound]=useState(false)
  const [invalidLoginDetails,setInvalidLoginDetails]=useState(false)
  const [serverError,setServerError]=useState(false)
  const [sendingEmail,setSendingEmail]=useState(false)
  const [emailSent,setEmailSent]=useState(false)
// antd modal functions
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    setOpen(false);
  };
  const handleCancel = (e) => {
    setOpen(false);
  };
  // login functions
  const handleInputChange=(e)=>{
    e.preventDefault()
    setNoUserFound(false)
    setInvalidLoginDetails(false)
    setServerError(false)
    const {name,value}=e.target
    setLoginDetails({...loginDetails,[name]:value})
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=loginDetails;
    if(!email||!password){
      setIncompleteDetails(true)
      return
    }
    try {
      const response=await axios.post(`${baseUrl}/auth/login`,loginDetails,{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:true})
      const user=response.data.user;
      dispatch(auth({rolename:user.role.rolename,superAdmin:user.superAdmin}))
      navigate("/dashboard")
    } catch (error) {
      if(error.status===404){setNoUserFound(true) ;return}
      if(error.status===400){setInvalidLoginDetails(true); return}
      setServerError(true)
    }
  }
  // forgot password functions
  const changeEmail=(e)=>{
    e.preventDefault()
    setNoUserFound(false)
   setServerError(false)
     setEmail(e.target.value)
  }
  const forgotPassword=async()=>{
    try {
      setSendingEmail(true)
      await axios.post(`${baseUrl}/auth/send-link`,{email,purpose:"change-password"},{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:true})
      setEmailSent(true)
      setSendingEmail(false)
    } catch (error) {
      setSendingEmail(false)
      if(error.status===404){setNoUserFound(true); return;}
      setServerError(true) ;return;
    }
  }
  return (
    <div className={`${loginStyles.login_page}`}>
      <div className={`${loginStyles.login_form_container}`}>
          <img src={logo} alt="logo" width={200}/>
        <form action="" className={`${loginStyles.login_form}`}>
            <div>
            {(noUserFound&&!isModalOpen)&&<p className={loginStyles.error_message}>No user exists with this email</p>} 
            {invalidLoginDetails&&<p className={loginStyles.error_message}>Enter valid login details</p>} 
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>handleInputChange(e)} type="email" name='email' id='email' placeholder='Enter Email' />
            </div>
            <div>
              <label htmlFor="password" >Password</label>
              <input onChange={(e)=>handleInputChange(e)} type="password" name="password" id="password" placeholder='Enter Password' />
            </div>
            <button onClick={(e)=>handleLogin(e)}>Login</button>
            <p>Forgot password? <span className={loginStyles.link} onClick={showModal}>change password</span></p>
        </form>
        </div>
        {/* <Modal title="Enter Email" open={isModalOpen} onOk={forgotPassword} onCancel={handleCancel}>
           {emailSent&&<>Verification link with instructions is sent on your email.</>}
          {sendingEmail&&
            <Spin indicator={<LoadingOutlined spin />} size="small" />
          }
          {(!sendingEmail&&!emailSent)&&<>
            {(noUserFound&&isModalOpen)&&<p className={loginStyles.error_message}>No user exists with this email</p>}
            <input type="text" name='email' id='email' onChange={(e)=>changeEmail(e)} placeholder='Enter Email' />
          </>}
      </Modal> */}
      {/* new */}
      <Modal
        title="Enter Email"
        open={open}
        onOk={forgotPassword}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: sendingEmail||emailSent,
        }}
        cancelButtonProps={{
          disabled: sendingEmail||emailSent,
        }}
      >
       {emailSent&&<>Verification link with instructions is sent on your email.</>}
          {sendingEmail&&
            <Spin indicator={<LoadingOutlined spin />} size="small" />
          }
          {(!sendingEmail&&!emailSent)&&<>
            {(noUserFound&&isModalOpen)&&<p className={loginStyles.error_message}>No user exists with this email</p>}
            <input type="text" name='email' id='email' onChange={(e)=>changeEmail(e)} placeholder='Enter Email' />
          </>}
      </Modal>
    </div>
  )
}

export default Login