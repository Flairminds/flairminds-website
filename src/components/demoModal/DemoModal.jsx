import React from 'react'
import demoModalStyles from './DemoModal.module.css'
import { toggleDemoModal } from '../../redux/slices/visitorDetailsModalSlice'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
const DemoModal = () => {
    const dispatch=useDispatch()
    const {demoLink} = useSelector(state=>state.visitorDetailsModal)
  return (
    <div className={demoModalStyles.main}>
        <div className={demoModalStyles.inner_container}>    
            <RxCross2 className={demoModalStyles.collapse_modal_icon} onClick={()=>dispatch(toggleDemoModal())}/>  
            <iframe src={demoLink} frameborder="0" style={{ boxSizing:"border-box",width:"100%", height:"100%"}}></iframe>
        </div>
    </div>
  )
}

export default DemoModal