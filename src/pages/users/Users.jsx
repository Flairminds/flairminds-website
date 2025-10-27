import React,{useState,useEffect} from 'react'
import axios from 'axios'
import usersStyles from './Users.module.css'
import { useNavigate } from 'react-router-dom'
const Users = ({ id,rolename,superAdmin }) => {
    const navigate=useNavigate()
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const [users,setUsers]=useState(null)
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers=async()=>{
        try {
            const response=await axios.get(`${baseUrl}/admin/get-users`,{withCredentials:true,headers:{Accept:"application/json"}})
            setUsers(response.data.users)
        } catch (error) {
            console.error(error)
        }
    }
    
  return (
    <div  className={`${usersStyles.users_page}`}>
            <div className={`${usersStyles.users_page_top}`}>
        <h1>Users</h1>
        {superAdmin&&<button onClick={()=>{navigate('/dashboard/create-user') }}>Create User</button>}
        </div>
            <div className={usersStyles.table_container}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                    {users&&users.map((user)=>(<tr key={user.email}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role.rolename}</td>
                </tr>))}
                </tbody>
            </table>
            </div>
        </div>
  )
}

export default Users