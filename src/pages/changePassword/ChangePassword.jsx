import React, { useState } from 'react'
import changePasswordStyles from './ChangePassword.module.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const ChangePassword = () => {
    const navigate=useNavigate()
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const [passwords,setPasswords]=useState({})
    const [passwordConfirmationError,setPasswordConfirmationError]=useState(false)
    const [passwordChanged,setPasswordChanged]=useState(false)
    const [serverError,setServerError]=useState(false)
    const [invalidDetails,setInvalidDetails]=useState(false)
    const params=useParams()
    const handleInputChange=(e)=>{
        setInvalidDetails(false)
        setServerError(false)
        setPasswordConfirmationError(false)
        const {name,value}=e.target
        setPasswords((prev)=>{
            const changedPassword={...prev,[name]:value}
            if ((!!changedPassword.cpassword)&&changedPassword.password!==changedPassword.cpassword) {
                setPasswordConfirmationError(true)
            }
            return changedPassword
        })
    }
    const changePassword=async(e)=>{
        e.preventDefault()
        try {
            await axios.post(`${baseUrl}/auth/change-password`,{token:params.verification_token,password:passwords.password},{withCredentials:true,headers:{Accept:"application/json","Content-Type":"application/json"}})
            setPasswordChanged(true)
            setTimeout(()=>{
                navigate('/login')
            },2000)
        } catch (error) {
            console.error({error})
            if(error.status===500){setServerError(true);return}
            if(error.status===400){setInvalidDetails(true);return}
        }
    }
  return (
    <div className={changePasswordStyles.main}>
        {passwordChanged?<>
            <h1 style={{color:"green"}}>Password Changed successfully</h1>
            <h4>Redirecting to login page ...</h4>
        </>:
        <>
        <h1>Create new password</h1>
        <form action="" className={changePasswordStyles.change_password}>
            {invalidDetails&&<p>Invalid user</p>}
            {invalidDetails&&<p>Invalid user</p>}
        <div>
            <label htmlFor="password" >Password</label>
            <input onChange={handleInputChange}  type="password" name="password" id="password" placeholder='Enter Password' />
        </div>
        <div>
            <label htmlFor="cpassword" >Confirm Password</label>
            <input className={`${passwordConfirmationError&&changePasswordStyles.input_error}`} onChange={handleInputChange}  type="password" name="cpassword" id="cpassword" placeholder='Confirm Password' />
        </div>
        <button onClick={changePassword} className={changePasswordStyles.submit}>Change Password</button>
        </form>
        </>
        }
        
    </div>
  )
}

export default ChangePassword