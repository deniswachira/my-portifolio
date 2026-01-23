import ReactGA from 'react-ga4';

// Your Google Analytics 4 Measurement ID
// Replace with your actual GA4 Measurement ID (format: G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = 'G-SM6BNFY0H1';

// Initialize Google Analytics
export const initGA = () => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-YOUR-MEASUREMENT-ID') {
        ReactGA.initialize(GA_MEASUREMENT_ID, {
            debug: process.env.NODE_ENV === 'development',
            titleCase: false,
            gaOptions: {
                send_page_view: false // We'll manually send page views
            }
        });
        // console.log('Google Analytics initialized');
    } else {
        // console.warn('Google Analytics not initialized: Please add your GA4 Measurement ID');
    }
};

// Track page views
export const trackPageView = (page_title, page_location) => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-YOUR-MEASUREMENT-ID') {
        ReactGA.send({
            hitType: 'pageview',
            page_title,
            page_location: page_location || window.location.pathname + window.location.search
        });
        // console.log(`Page view tracked: ${page_title}`);
    }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-YOUR-MEASUREMENT-ID') {
        ReactGA.event({
            action,
            category,
            label,
            value
        });
        // console.log(`Event tracked: ${action} - ${category} - ${label}`);
    }
};

// Track resume downloads
export const trackResumeDownload = (resumeType = 'PDF') => {
    trackEvent('download', 'Resume', resumeType);

    // Also track as a conversion event
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': GA_MEASUREMENT_ID,
            'value': 1,
            'currency': 'USD'
        });
    }
};

// Track contact form submissions
export const trackContactSubmission = () => {
    trackEvent('submit', 'Contact Form', 'Portfolio Contact');
};

// Track social media clicks
export const trackSocialClick = (platform) => {
    trackEvent('click', 'Social Media', platform);
};

// Track project clicks
export const trackProjectClick = (projectName) => {
    trackEvent('click', 'Project', projectName);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
    trackEvent('scroll', 'Page Engagement', `${percentage}%`);
};

// Track time spent on site
export const trackTimeSpent = (seconds) => {
    if (seconds > 10) { // Only track if user spent more than 10 seconds
        trackEvent('engagement', 'Time on Site', `${Math.round(seconds)}s`);
    }
};