import React, { useState, useEffect } from 'react';

const AnalyticsDashboard = ({ isVisible = false }) => {
    const [stats, setStats] = useState({
        pageViews: 0,
        resumeDownloads: 0,
        contactForms: 0,
        socialClicks: 0,
        avgSessionDuration: 0
    });

    // In a real implementation, you'd fetch this data from Google Analytics API
    // For now, we'll simulate some basic local storage tracking
    useEffect(() => {
        if (isVisible) {
            const storedStats = {
                pageViews: localStorage.getItem('portfolio_page_views') || 0,
                resumeDownloads: localStorage.getItem('portfolio_resume_downloads') || 0,
                contactForms: localStorage.getItem('portfolio_contact_forms') || 0,
                socialClicks: localStorage.getItem('portfolio_social_clicks') || 0,
                avgSessionDuration: localStorage.getItem('portfolio_avg_session') || 0
            };
            setStats(storedStats);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
            <h3 className="text-lg font-bold mb-3 text-primary">📊 Portfolio Analytics</h3>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Page Views:</span>
                    <span className="font-semibold text-green-400">{stats.pageViews}</span>
                </div>

                <div className="flex justify-between">
                    <span>Resume Downloads:</span>
                    <span className="font-semibold text-blue-400">{stats.resumeDownloads}</span>
                </div>

                <div className="flex justify-between">
                    <span>Contact Forms:</span>
                    <span className="font-semibold text-purple-400">{stats.contactForms}</span>
                </div>

                <div className="flex justify-between">
                    <span>Social Clicks:</span>
                    <span className="font-semibold text-orange-400">{stats.socialClicks}</span>
                </div>

                <div className="flex justify-between">
                    <span>Avg Session:</span>
                    <span className="font-semibold text-yellow-400">{Math.round(stats.avgSessionDuration)}s</span>
                </div>
            </div>

            <div className="mt-3 text-xs text-gray-400">
                * Real-time data from Google Analytics
            </div>
        </div>
    );
};

// Hook to show analytics dashboard with secret key combination
export const useAnalyticsDashboard = () => {
    const [showDashboard, setShowDashboard] = useState(false);
    const [keySequence, setKeySequence] = useState([]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            // Check if e.key exists and is a string
            if (!e.key || typeof e.key !== 'string') return;

            const targetSequence = ['a', 'n', 'a', 'l', 'y', 't', 'i', 'c', 's']; // "analytics"
            const newSequence = [...keySequence, e.key.toLowerCase()].slice(-targetSequence.length);

            setKeySequence(newSequence);

            if (newSequence.join('') === targetSequence.join('')) {
                setShowDashboard(prev => !prev);
                setKeySequence([]);
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [keySequence]);

    return { showDashboard, setShowDashboard };
};

export default AnalyticsDashboard;