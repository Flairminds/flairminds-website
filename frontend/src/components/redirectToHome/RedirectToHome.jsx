import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectToHome = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        navigate('/')
    },[])
  return (
    <div>RedirectToHome</div>
  )
}

export default RedirectToHome