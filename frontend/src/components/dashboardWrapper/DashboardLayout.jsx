import React, { useState } from 'react'
import dashboardLayoutStyles from './DashboardLayout.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TbUserSquareRounded } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const DashboardWrapper = () => {
  const navigate=useNavigate()
  const links=[
    {
      name:"Home",
      path:"/",
      icon:<IoHomeOutline />
    },
    {
      name:"Dashboard",
      path:"/dashboard",
      icon:<MdOutlineDashboard />,
    },
    {
      name:"Visitors",
      path:"/dashboard/visitors",
      icon:<FaUserFriends />
    },
    {
      name:"Users",
      path:"/dashboard/users",
      icon:<TbUserSquareRounded />,
    },
    {
      name:"Profile",
      path:"/dashboard/profile",
      icon:<CgProfile />,
    },
    // {
    //   name:"Settings",
    //   path:"/settings",
    //   icon:<IoSettingsOutline />,
    // },
  ]
  const [activeNavbar,setActiveNavbar]=useState(false)
  return (
    <div className={`${dashboardLayoutStyles.dashboard_layout}`}>
      <div className={`${dashboardLayoutStyles.navbar}`}>
      <RxHamburgerMenu  onClick={()=>setActiveNavbar(true)} className={dashboardLayoutStyles.hamburger}/>
      </div>
      <div className={`${activeNavbar?dashboardLayoutStyles.side_bar_active:dashboardLayoutStyles.side_bar}`}>
      <RxCross2 className={`${dashboardLayoutStyles.close}`} onClick={()=>{setActiveNavbar(false)}}/>

        <ul className={`${dashboardLayoutStyles.side_links}`}>
          {links.map((link)=><li key={link.path} className={`${link.path===window.location.pathname&&dashboardLayoutStyles.active_link}`} onClick={()=>{setActiveNavbar(false);navigate(`${link.path}`)}}>{link.icon}{link.name}</li>)}
        </ul>
      </div>
      <div className={`${dashboardLayoutStyles.content}`}>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardWrapper