import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Protected = ({children,allowedRoles}) => {
    const navigate=useNavigate()
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const [authenticated,setAuthenticated]=useState(false)
    const [props,setProps]=useState({authenticated})
    useEffect(()=>{
        authenticate()
    },[])
    const authenticate=async()=>{
        try {
            const response=await axios.get(`${baseUrl}/auth/authenticate`,{withCredentials:true,headers:{Accept:"application/json"}})
            const {id,rolename,superAdmin}=response.data;
            if(response.data.superAdmin){
                setProps({id,rolename,superAdmin})
                setAuthenticated(true)
                return
            }
            if(allowedRoles.includes('all')||allowedRoles.includes(response.data.rolename)){
                setProps({id,rolename,superAdmin})
                setAuthenticated(true)
            }else{
                navigate('/login')
            }
        } catch (error) {
            navigate('/login')
        }
    }
  return ( 
    <>
    {authenticated&&<div>{React.Children.map(children, (child) => {
        return React.cloneElement(child, props);
      })}</div>}
    </>
  )
}

export default Protected