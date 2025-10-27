import ReactGA from 'react-ga4'

const GA_MEASUREMENT_ID= import.meta.env.VITE_APP_GA_MEASUREMENT_ID;
const getOrCreateUserId = () => {
    localStorage.removeItem("gauid")
    let userId = localStorage.getItem("gauid");
    if (!userId) {
      userId = crypto.randomUUID(); // Generate a new unique ID
      localStorage.setItem("gauid", `gauid-${userId}`);
    }
    return userId;
  };


const setUser=()=>{
    const userId=getOrCreateUserId()
    ReactGA.set({userId},()=>{
      console.log('set user id is successfull')});
}
const initGA = () => {
    setUser()
    ReactGA.initialize(GA_MEASUREMENT_ID,{
        gtagOptions: { userId: getOrCreateUserId() }
    });
  };
  
  const trackPageView = (path, title) => {
    ReactGA.send({ hitType: "pageview", page: path, title, userId:localStorage.getItem("gauid") });
  };
  
  const trackEvent = (category, action, label = "", value = 0) => {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  };
export {setUser,initGA,trackEvent,trackPageView}