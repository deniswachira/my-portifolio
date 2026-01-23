import { useEffect, useRef } from 'react';
import { trackPageView, trackScrollDepth, trackTimeSpent } from '../utils/analytics';

// Custom hook for tracking page analytics
export const usePageTracking = (pageTitle) => {
    const startTimeRef = useRef(Date.now());
    const scrollDepthRef = useRef(0);

    useEffect(() => {
        // Track page view
        trackPageView(pageTitle);

        // Track scroll depth
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            // Track scroll milestones (25%, 50%, 75%, 100%)
            const milestones = [25, 50, 75, 100];
            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && scrollDepthRef.current < milestone) {
                    scrollDepthRef.current = milestone;
                    trackScrollDepth(milestone);
                }
            });
        };

        // Track time spent when user leaves
        const handleBeforeUnload = () => {
            const timeSpent = (Date.now() - startTimeRef.current) / 1000;
            trackTimeSpent(timeSpent);
        };

        // Add event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('beforeunload', handleBeforeUnload);

            // Track time spent on component unmount
            const timeSpent = (Date.now() - startTimeRef.current) / 1000;
            if (timeSpent > 5) {
                trackTimeSpent(timeSpent);
            }
        };
    }, [pageTitle]);
};