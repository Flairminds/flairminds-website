import './App.css'
import Home from './pages/home/Home';
import Contactus from './pages/contact/Contact'
import StorePage from './pages/storePage/StorePage'
import Login from './pages/login/Login'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import CreateUser from './pages/createUser/CreateUser'
import Dashboard from './pages/dashboard/Dashboard'
import Protected from './components/protected/Protected'
import Users from './pages/users/Users'
import DashboardWrapper from './components/dashboardWrapper/DashboardLayout'
import GeneralLayout from './components/generalLayout/GeneralLayout'
import Visitors from './pages/visitors/Visitors'
import Profile from './pages/profile/Profile'
import ChangePassword from './pages/changePassword/ChangePassword'
import VerifyLink from './components/verifyLink/VerifyLink'
import RedirectToHome from './components/redirectToHome/RedirectToHome'
import { useEffect, useState, Suspense, lazy } from 'react'
import { initGA, setUser, trackPageView } from './services/googleAnalytics'
import { paths } from './data/paths'
import Preloader from './components/preloader/Preloader'
import ProductPage from './pages/productPage/ProductPage'
import Deloitte from './pages/deloitte/Deloitte'
import CaseStudies from './pages/caseStudies/CaseStudies'
import EntDataTransformation from './pages/entDataTransformation/EntDataTransformation'
import CloudOptimization from './pages/cloudOptimization/CloudOptimization'
import QuantFinance from './pages/quantFinance/QuantFinance'
import ESignPlatform from './pages/eSignPlatform/ESignPlatform'
import FableFintech from './pages/fableFintech/FableFintech'
import VendorRiskAssessment from './pages/VendorRiskManagement/VendorRiskManagement'
import Blogs from './pages/blogs/Blogs'
import { BlogsLayout } from './blogs/BlogsLayout'
import AboutUsPage from './pages/aboutUs/AboutUsPage'
import CareersPage from './pages/careers/CareersPage'

// ScrollToTop component to handle scroll on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// ✅ Corrected Component for Tracking Page Views
// const TrackPage = () => {
//   const location = useLocation(); // ✅ Uses useLocation() to dynamically track route changes
//   useEffect(() => {
//     trackPageView(location.pathname, paths[location.pathname] || "Unknown Page");
//   }, [location]); // ✅ Runs every time the route changes
//   return null;
// };

function App() {
  // useEffect(()=>{
  //   initGA();
  //   // setUser();
  // },[])
  const [loading, setLoading] = useState(true);
  // const Home = lazy(() => import('./pages/home/Home'));

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 2 seconds loading for demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        {/* <TrackPage/> */}
        <Routes>
          <Route exact path='/' element={<GeneralLayout />}>
            <Route exact path='/' element={loading ? <Preloader /> : <Home />} />
            <Route exact path='/store' element={<StorePage />} />
            {/* <Route exact path='/:id' element={<Home/>}/> */}
            <Route exact path='/contact' element={<Contactus />} />
            <Route exact path='/about' element={<AboutUsPage />} />
            <Route exact path='/careers' element={<CareersPage />} />
            <Route exact path='/case-study' element={<CaseStudies />} />
            <Route exact path='/id' element={<ProductPage />} />
            <Route exact path='/case-study/ai_automation' element={<Deloitte />} />
            <Route exact path='/case-study/ent_data_transformation' element={<EntDataTransformation />} />
            <Route exact path='/case-study/cloud_optimization' element={<CloudOptimization />} />
            <Route exact path='/case-study/quant_finance' element={<QuantFinance />} />
            <Route exact path='/case-study/e_sign_platform' element={<ESignPlatform />} />
            <Route exact path='/case-study/fable_fintech' element={<FableFintech />} />
            <Route exact path='/case-study/vendor_risk_assessment' element={<VendorRiskAssessment />} />
            <Route exact path='/blogs' element={<Blogs />} />
            <Route exact path='/blogs/*' element={<BlogsLayout />} />
          </Route>
          <Route exact path='dashboard' element={<DashboardWrapper />}>
            <Route index element={<Protected allowedRoles={['all']}><Dashboard /></Protected>} />
            <Route exact path='visitors' element={<Protected allowedRoles={['all']}><Visitors /></Protected>} />
            <Route exact path='create-user' element={<Protected allowedRoles={[]}><CreateUser /></Protected>} />
            <Route exact path='users' element={<Protected allowedRoles={['all']}><Users /></Protected>} />
            <Route exact path='profile' element={<Protected allowedRoles={['all']}><Profile /></Protected>} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/change-password/:verification_token' element={<VerifyLink><ChangePassword /> </VerifyLink>} />
          <Route path='*' element={<RedirectToHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
