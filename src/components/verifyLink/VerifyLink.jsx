import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
const VerifyLink = ({children,allowedRoles}) => {
    const params=useParams()
    const navigate=useNavigate()
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const [verified,setVerified]=useState(false)
    const [props,setProps]=useState(null)
    useEffect(()=>{
        authenticate()
    },[])
    const authenticate=async()=>{
        try {
            await axios.post(`${baseUrl}/auth/verify-link`,{token:params.verification_token},{withCredentials:true,headers:{Accept:"application/json"}})
            setVerified(true)
        } catch (error) {
            navigate('/login')
        }
    }
  return ( 
    <>
    {verified&&children}
    </>
  )
}

export default VerifyLink