import React from 'react';
import { trackResumeDownload } from '../utils/analytics';

const ResumeDownload = ({
    resumeUrl = '/resume/DENIS_WACHIRA_Resume.pdf',
    buttonText = 'Download Resume',
    className = '',
    variant = 'primary'
}) => {

    const handleResumeDownload = (e) => {
        // Track the download event
        trackResumeDownload('PDF');

        // If you want to force download instead of opening in browser
        if (resumeUrl.startsWith('/')) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'DENIS_WACHIRA_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const baseClasses = "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-xl",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary",
        outline: "border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white"
    };

    return (
        <a
            href={resumeUrl}
            onClick={handleResumeDownload}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Denis Wachira's Resume"
        >
            <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            {buttonText}
        </a>
    );
};

export default ResumeDownload;