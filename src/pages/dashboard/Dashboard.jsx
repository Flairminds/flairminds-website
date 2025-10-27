import React, { useEffect, useState } from 'react'
import dashboardStyles from './Dashboard.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = ({authenticated}) => {
  const baseUrl=  import.meta.env.VITE_API_BASE_URL||'';
  const timeFrames=['week','month','year']
  const [gredient,setGredient]=useState()
  const [data,setData]=useState([])
  const [activeDropdown,setActiveDropDown]=useState(false)
  const [selectedFilter,setSelectedFilter]=useState(timeFrames[0])
  const [totalVisits,setTotalVisits]=useState(0)
  const navigate=useNavigate()
  const colors=['rgb(12,87,128)','rgb(0,134,179)','rgb(0,98,149)','rgb(22,138,172)','rgb(10,99,147)']
  useEffect(()=>{
    getProducts()
  },[])
  useEffect(()=>{
    getVisits()
  },[selectedFilter])
  useEffect(()=>{
    changeGredient()
  },[data])
  const getProducts=async()=>{
    try {
      const response=await axios.get(`${baseUrl}/admin/get-products`,{withCredentials:true,headers:{Accept:"application.json"}})
    } catch (error) {
      console.error({error})
    }
  }
  const getVisits=async()=>{
    try {
      const response=await axios.get(`${baseUrl}/admin/get-visits/${selectedFilter}`,{withCredentials:true,headers:{Accept:"application.json"}})
      setData(response.data.visitData)
    } catch (error) {
        console.error(error)
       }
  }
  const changeGredient=async()=>{    
    let divisor=0;
    data.forEach((keys)=>divisor+=Object.values(keys)[0])
    setTotalVisits(divisor)
    const angleChange=Math.floor(360/divisor)
    const opacityChange=1/divisor.toFixed(2)
    let currAngle=0
    let currOpacity=0
    let gredientPrompt=''
    let prev=0
    for(let i=0;(i<data.length)&&currAngle+angleChange<=360&&currOpacity+opacityChange<=100;i++){
      let multiplier=Object.values(data[i])[0];
      gredientPrompt+=`${colors[i]} ${prev}deg, ${colors[i]} ${currAngle+angleChange*multiplier}deg ${i+1!==data.length?",":""} `
      prev=prev+angleChange*multiplier
      currAngle+=angleChange*multiplier;
      currOpacity+=opacityChange*multiplier;
    }
    setGredient(gredientPrompt)
  }
  const selectFilter=(index)=>{
    setSelectedFilter(timeFrames[index])
    setActiveDropDown(false)
  }
  return (
    <div className={`${dashboardStyles.dashboard_page}`}>
      <h1>Overview</h1>
      <div className={`${dashboardStyles.vistors_overview}`}>
        <div className={`${dashboardStyles.analytics}`}>
          <div className={`${dashboardStyles.analytics_top}`}>
            <h3>Analytics</h3>
             <div className="dropdown">
                                <div className={`${dashboardStyles.dropdown_top} ${dashboardStyles.no_select} ${activeDropdown?dashboardStyles.active_dropdown_top:dashboardStyles.inactive_dropdown_top}`} onClick={()=>setActiveDropDown(!activeDropdown)}> 
                                    <p>{selectedFilter?`Last ${selectedFilter}`:"Select Role"}</p>
                                    <RiArrowDropDownLine className={dashboardStyles.dropdown_icon}/>
                                </div>
                                <div className={dashboardStyles.dropdown_container}>
                                <div className={`${dashboardStyles.dropdown_body} ${activeDropdown?dashboardStyles.active_dropdown:dashboardStyles.inactive_dropdown}`}>
                                  <ul>
                                    {timeFrames?.map((filter,index)=> 
                                        <li key={index} className={`${dashboardStyles.dropdown_list}`} onClick={()=>selectFilter(index)}>{`Last ${filter}`}</li>
                                    )}
                                  </ul>
                                </div>
                                </div>
            </div>
          </div>
          <div className={dashboardStyles.analytics_bottom}>
          <div className={`${dashboardStyles.outer}`} style={{backgroundImage:`conic-gradient(${gredient})`}}>
          <div className={`${dashboardStyles.inner}`}>
              <h4>{totalVisits  } Visits</h4>
          </div>
        </div>
          <div style={{width:"100%"}}>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>visits</th>
                </tr>
              </thead>
              <tbody>
              {data?.map((elem)=>
              <tr key={Object.keys(elem)[0]}>
                <td >{Object.keys(elem)[0]}</td>
                <td>{Object.values(elem)[0]}</td>
              </tr>)}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
        </div>
  )
}

export default Dashboard