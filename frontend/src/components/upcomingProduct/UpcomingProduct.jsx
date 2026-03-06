import React, { useState } from 'react'
import upcomingProductStyles from './UpcomingProduct.module.css'
import { VscLayersDot } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/slices/visitorDetailsModalSlice'
import { FaAnglesLeft } from "react-icons/fa6";

const UpcomingProduct = React.memo(({prop}) => {
    const [open,setOpen]=useState(false)
    const dispatch=useDispatch()
  return (
    <div className={upcomingProductStyles.main}>
        <div className={upcomingProductStyles.inner_container}>
        <div className={upcomingProductStyles.details_container}>
        <img src={prop.image} alt="" className={upcomingProductStyles.image} />
        <h3>{prop.name}</h3>
        <p>{prop.detailsParagraphs[0]}</p>
        </div>
        <button className={upcomingProductStyles.learn} onClick={()=>setOpen(true)}>Show more</button>
        </div>
        {/* modal */}
        {open&&
        <div className={upcomingProductStyles.expanded_main}>
        <div className={upcomingProductStyles.inner_container}>
            <div className={upcomingProductStyles.back} onClick={()=>setOpen(false)}>
                <FaAnglesLeft />
                <h3>Back</h3>
            </div>
            <div className={upcomingProductStyles.expanded_content}>
                <div className={upcomingProductStyles.content_header}>
                <h1>{prop.name}</h1>
                <img src={prop.image} alt="" className={upcomingProductStyles.image} />
                </div>
                <div className={upcomingProductStyles.modal_details}>
                    {prop?.detailsParagraphs?.map((paragraph,i)=>(<p key={i}>{paragraph}</p>))}
                    <div className={upcomingProductStyles.features}>
                    <h2>Coming with great features :</h2>
                        <ul className={upcomingProductStyles.point_list}>
                            {prop?.list?.map((element,i)=>(<li key={i}>{element}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={upcomingProductStyles.interested}>
                <button className={upcomingProductStyles.interested} onClick={()=>dispatch(toggleModal({interest:prop.name,redirectUrl:null}))}>Interested</button>
            </div>
        </div>
    </div>}
    </div>
  )
})

export default UpcomingProduct