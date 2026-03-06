import React ,{useState,useEffect} from 'react'
import visitorsStyle from './Visitors.module.css'
import axios from 'axios'
const Visitors = () => {
    const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
    const [visitors,setVisitors]=useState(null)
    useEffect(()=>{
        getVisitors()
    },[])
    const getVisitors=async()=>{
        try {
            const response=await axios.get(`${baseUrl}/admin/get-visitors`,{withCredentials:true,headers:{Accept:"application/json"}})
            setVisitors(response.data.visitors)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className={`${visitorsStyle.visitors_page}`}>
            <h1>Visitors</h1>
            <div className={visitorsStyle.table_container}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Organization</th>
                    <th>Industry</th>
                    <th>Last Visit</th>
                    <th>No. of  Visits</th>
                    <th>Intrests</th>
                </tr>
                </thead>
                <tbody>
                    {visitors&&visitors.map((visitor)=>(<tr key={visitor.id}>
                    <td>{visitor.name}</td>
                    <td>{visitor.email}</td>
                    <td>{visitor.phone}</td>
                    <td>{visitor.organization}</td>
                    <td>{visitor.industry}</td>
                    <td>{visitor.lastVisit.split("T")[0]}</td>
                    <td>{visitor.visits}</td>
                    <td>{visitor.interests?.map((interest)=>`${interest}, `)}</td>
                </tr>))}
                </tbody>
            </table>
            </div>
        </div>
  )
}

export default Visitors