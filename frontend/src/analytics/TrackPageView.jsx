import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import mixpanel from "mixpanel-browser";

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const getPageName = (path) => {
      if (path === "/") return "Home";
      if (path === "/about") return "About";
      if (path === "/contact") return "Contact";
      if (path === "/careers") return "Careers";
      if (path.startsWith("/blogs")) return "Blog";
      if (path.startsWith("/case-study")) return "Case Studies";
      if (path.startsWith("/services")) return "Services";
      if (path.startsWith("/dashboard")) return "Dashboard";
      if (path === "/login") return "Login";

      return "Other";
    };

    const pageName = getPageName(path);

    mixpanel.track("Page Viewed", {
      page_name: pageName,
      page_path: path,
      page_url: window.location.href,
    });

  }, [location.pathname]);

  return null;
};

export default TrackPageView;