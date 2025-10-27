import Hero from '../../components/hero/Hero'
import UserDetailsModal from '../../components/userDetailsModal/UserDetailsModal'
import {useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/productCard/ProductCard'
import { products } from '../../data/productsData'
import homeStyles from "./Home.module.css"
import UpcomingProduct from '../../components/upcomingProduct/UpcomingProduct'
import FeedbackModal from '../../components/feedbackModal/FeedbackModal'
import { VscFeedback } from "react-icons/vsc";
import { toggleFeedbackModal } from '../../redux/slices/visitorDetailsModalSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import DemoModal from '../../components/demoModal/DemoModal'
import { linkSharingHashes } from '../../data/linkSharingHashes'
import ShareModal from '../../components/shareModal/ShareModal'
import Hero1 from '../../components/hero1/Hero1'
import Hero2 from '../../components/hero2/Hero2'

const Home = () => {
  const {open,feedBackOpen,demoModalOpen,shareName}=useSelector(state=>state.visitorDetailsModal);
  const availablePtoducts=products.filter(product=>product.status==='released');
  const upcomingProducts=products.filter(product=>product.status==='upcoming');
  const dispatch=useDispatch();
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const id = linkSharingHashes[hash]; 
      if (id !== undefined) {
        const productElement = document.getElementById(parseInt(id)); // Use correct ID format
        if (productElement) {
          const yOffset = 70; // Fixed offset
          const y = productElement.getBoundingClientRect().top + window.scrollY - yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <div className={homeStyles.main}>
      {/* <Hero/> */}
      {/* <Hero1/> */}
      <Hero2/>
      {availablePtoducts?.map((product,index)=>(<ProductCard prop={product} key={index}/>))}
      {open&&<UserDetailsModal/>}
      {upcomingProducts.length>0 &&<>
      <h1 className={homeStyles.heading}>Upcoming Products</h1>
      <div className={homeStyles.upcoming_products}>
      {upcomingProducts?.map((product,index)=>(<><UpcomingProduct prop={product} key={index}/></>))}
      </div>
      </>}
      {feedBackOpen&&<FeedbackModal/>}
      <div className={homeStyles.feedback_button_container} onClick={()=>{dispatch(toggleFeedbackModal())}}>
        <VscFeedback className={homeStyles.feedback_icon}/>
        <button className={homeStyles.feedback_botton}>Feedback</button>
      </div>
      {demoModalOpen&&<DemoModal/>}
      {shareName&&<ShareModal/>}
      {/* <shareLink/> */}
    </div>
  )
}

export default Home