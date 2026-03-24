import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import mixpanel from "mixpanel-browser";

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    mixpanel.track("page_viewed", {
      page: location.pathname,
    });
  }, [location.pathname]);

  return null;
};

export default TrackPageView;
