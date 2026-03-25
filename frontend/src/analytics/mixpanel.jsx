import mixpanel from "mixpanel-browser";

export const initMixpanel = () => {
  mixpanel.init("e89d530ea24b6b0bea4f9cda50117726", {
    debug: true,
    track_pageview: false,
    autocapture: false,
    record_sessions_percent: 100,
    api_host: "https://api-eu.mixpanel.com",
  });
};

export const trackEvent = (eventName, properties = {}) => {
  mixpanel.track(eventName, properties);
};
