import axios from 'axios'
import React, { useEffect, useState } from 'react'
import profileStyles from './Profile.module.css'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate=useNavigate()
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const [user,setUser]=useState()
    useEffect(()=>{
        getUser()
    },[])
    const getUser=async()=>{
        try {
            const response=await axios.get(`${baseUrl}/auth/user`,{withCredentials:true,headers:{Accept:"application/json","Content-Type":"application/json"}})
            setUser(response.data.user)
        } catch (error) {
            console.error({error})
            navigate('/login')
        }
    }
    const logout=async()=>{
        try {
            const response=await axios.get(`${baseUrl}/auth/logout`,{withCredentials:true,headers:{Accept:"application/json"}})
            navigate("/")
        } catch (error) {
            console.error({error})
        }
    }
  return (
    <div className={`${profileStyles.profile_page}`}>
        {user&&
        <div className={`${profileStyles.profile_page_top}`}>
        <div className={`${profileStyles.profile_pic}`}>
            <p>{user?.name?.slice(0,1)}</p>
        </div>
        <div>
            <h3>{user?.name}</h3>
            <p>{user?.email}</p>
            <p>{user?.role?.rolename}</p>
        </div>
    </div>
        }
        <button  onClick={()=>{logout()}} className={`${profileStyles.logout_button}`}>logout</button>
    </div>
  )
}

export default Profile