import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Preloader from "./components/preloader/Preloader";

// Layouts
const GeneralLayout = lazy(
  () => import("./components/generalLayout/GeneralLayout"),
);
const DashboardWrapper = lazy(
  () => import("./components/dashboardWrapper/DashboardLayout"),
);

// Pages
const Home = lazy(() => import("./pages/home/Home"));
const Contactus = lazy(() => import("./pages/contact/Contact"));
const StorePage = lazy(() => import("./pages/storePage/StorePage"));
const Login = lazy(() => import("./pages/login/Login"));
const CreateUser = lazy(() => import("./pages/createUser/CreateUser"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Users = lazy(() => import("./pages/users/Users"));
const Visitors = lazy(() => import("./pages/visitors/Visitors"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const ChangePassword = lazy(
  () => import("./pages/changePassword/ChangePassword"),
);
const ProductPage = lazy(() => import("./pages/productPage/ProductPage"));
const Deloitte = lazy(() => import("./pages/deloitte/Deloitte"));
const CaseStudies = lazy(() => import("./pages/caseStudies/CaseStudies"));
const EntDataTransformation = lazy(
  () => import("./pages/entDataTransformation/EntDataTransformation"),
);
const CloudOptimization = lazy(
  () => import("./pages/cloudOptimization/CloudOptimization"),
);
const QuantFinance = lazy(() => import("./pages/quantFinance/QuantFinance"));
const ESignPlatform = lazy(() => import("./pages/eSignPlatform/ESignPlatform"));
const FableFintech = lazy(() => import("./pages/fableFintech/FableFintech"));
const VendorRiskAssessment = lazy(
  () => import("./pages/VendorRiskManagement/VendorRiskManagement"),
);
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const AboutUsPage = lazy(() => import("./pages/aboutUs/AboutUsPage"));
const CareersPage = lazy(() => import("./pages/careers/CareersPage"));
const TestAutomation = lazy(
  () => import("./pages/testAutomation/TestAutomation"),
);
const AiPocDevelopment = lazy(
  () => import("./pages/aiPocDevelopment/AiPocDevelopment"),
);
const AiMdmCaseStudy = lazy(
  () => import("./pages/aiMdmCaseStudy/AiMdmCaseStudy"),
);

// Service Pages
const WebMobileDevelopment = lazy(
  () => import("./pages/services/webMobileDevelopment/WebMobileDevelopment"),
);
const CloudDevOps = lazy(
  () => import("./pages/services/cloudDevOps/CloudDevOps"),
);
const AIDataScience = lazy(
  () => import("./pages/services/aiDataScience/AIDataScience"),
);
const QualityEngineering = lazy(
  () => import("./pages/services/qualityEngineering/QualityEngineering"),
);
const DigitalTransformation = lazy(
  () => import("./pages/services/digitalTransformation/DigitalTransformation"),
);
const ITManagement = lazy(
  () => import("./pages/services/itManagement/ITManagement"),
);
const AiTechStack = lazy(
  () => import("./pages/services/aiTechStack/AiTechStack"),
);

// Components
const Protected = lazy(() => import("./components/protected/Protected"));
const VerifyLink = lazy(() => import("./components/verifyLink/VerifyLink"));
const RedirectToHome = lazy(
  () => import("./components/redirectToHome/RedirectToHome"),
);
const BlogsLayout = lazy(() =>
  import("./blogs/BlogsLayout").then((module) => ({
    default: module.BlogsLayout,
  })),
);

// ScrollToTop component to handle scroll on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  // Removed artificial 1-second loading delay that was blocking LCP

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route exact path="/" element={<GeneralLayout />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/store" element={<StorePage />} />
              <Route exact path="/contact" element={<Contactus />} />
              <Route exact path="/about" element={<AboutUsPage />} />
              <Route exact path="/careers" element={<CareersPage />} />
              <Route exact path="/case-study" element={<CaseStudies />} />
              <Route exact path="/id" element={<ProductPage />} />
              <Route
                exact
                path="/case-study/ai_automation"
                element={<Deloitte />}
              />
              <Route
                exact
                path="/case-study/ent_data_transformation"
                element={<EntDataTransformation />}
              />
              <Route
                exact
                path="/case-study/cloud_optimization"
                element={<CloudOptimization />}
              />
              <Route
                exact
                path="/case-study/quant_finance"
                element={<QuantFinance />}
              />
              <Route
                exact
                path="/case-study/e_sign_platform"
                element={<ESignPlatform />}
              />
              <Route
                exact
                path="/case-study/fable_fintech"
                element={<FableFintech />}
              />
              <Route
                exact
                path="/case-study/vendor_risk_assessment"
                element={<VendorRiskAssessment />}
              />
              <Route
                exact
                path="/case-study/test-automation"
                element={<TestAutomation />}
              />
              <Route
                exact
                path="/case-study/ai-poc-development"
                element={<AiPocDevelopment />}
              />
              <Route
                exact
                path="/case-study/ai-mdm-platform"
                element={<AiMdmCaseStudy />}
              />
              <Route exact path="/blogs" element={<Blogs />} />
              <Route exact path="/blogs/*" element={<BlogsLayout />} />
              <Route
                exact
                path="/services/web-mobile-development"
                element={<WebMobileDevelopment />}
              />
              <Route
                exact
                path="/services/cloud-devops"
                element={<CloudDevOps />}
              />
              <Route
                exact
                path="/services/ai-data-science"
                element={<AIDataScience />}
              />
              <Route
                exact
                path="/services/quality-engineering"
                element={<QualityEngineering />}
              />
              <Route
                exact
                path="/services/digital-transformation"
                element={<DigitalTransformation />}
              />
              <Route
                exact
                path="/services/it-management"
                element={<ITManagement />}
              />
              <Route
                exact
                path="/services/ai-tech-stack"
                element={<AiTechStack />}
              />
            </Route>
            <Route exact path="dashboard" element={<DashboardWrapper />}>
              <Route
                index
                element={
                  <Protected allowedRoles={["all"]}>
                    <Dashboard />
                  </Protected>
                }
              />
              <Route
                exact
                path="visitors"
                element={
                  <Protected allowedRoles={["all"]}>
                    <Visitors />
                  </Protected>
                }
              />
              <Route
                exact
                path="create-user"
                element={
                  <Protected allowedRoles={[]}>
                    <CreateUser />
                  </Protected>
                }
              />
              <Route
                exact
                path="users"
                element={
                  <Protected allowedRoles={["all"]}>
                    <Users />
                  </Protected>
                }
              />
              <Route
                exact
                path="profile"
                element={
                  <Protected allowedRoles={["all"]}>
                    <Profile />
                  </Protected>
                }
              />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/change-password/:verification_token"
              element={
                <VerifyLink>
                  <ChangePassword />{" "}
                </VerifyLink>
              }
            />
            <Route path="*" element={<RedirectToHome />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
