# Portfolio Analytics Setup Guide

## 🚀 Quick Start

### 1. Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your portfolio website
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Replace `G-YOUR-MEASUREMENT-ID` in `/src/utils/analytics.js` with your actual ID

### 2. Add Your Resume File

1. Create a `public/resume/` folder in your project
2. Add your resume PDF: `public/resume/Denis-Wachira-Resume.pdf`
3. The download tracking will work automatically!

### 3. Add Resume Download Button

Add the `ResumeDownload` component anywhere in your portfolio:

```jsx
import ResumeDownload from './components/ResumeDownload';

// In your Home or About component
<ResumeDownload 
  buttonText="Download My Resume"
  variant="primary"
/>
```

## 📊 What Gets Tracked

### Automatic Tracking:
- ✅ **Page Views** - Every time someone visits your portfolio
- ✅ **Time on Site** - How long users spend browsing
- ✅ **Scroll Depth** - How far users scroll (25%, 50%, 75%, 100%)
- ✅ **Bounce Rate** - Users who leave immediately

### Custom Events:
- ✅ **Resume Downloads** - Every PDF download with conversion tracking
- ✅ **Contact Form Submissions** - When users send you messages
- ✅ **Social Media Clicks** - GitHub, LinkedIn, Twitter, Facebook, YouTube clicks
- ✅ **Project Interactions** - Which projects users click on

## 🎯 Viewing Your Analytics

### Option 1: Google Analytics Dashboard
1. Visit [Google Analytics](https://analytics.google.com/)
2. View real-time data, audience insights, and detailed reports
3. Set up custom alerts for resume downloads and contact forms

### Option 2: Secret In-App Dashboard
1. On your live portfolio, type **"analytics"** (without quotes)
2. A mini dashboard will appear in the top-right corner
3. Shows basic stats and real-time data

## 🛠 Advanced Configuration

### Custom Events
Track additional interactions by adding to any component:

```jsx
import { trackEvent } from '../utils/analytics';

// Track button clicks
const handleClick = () => {
  trackEvent('click', 'Custom Button', 'Button Name');
};

// Track feature usage
const handleFeatureUse = () => {
  trackEvent('engagement', 'Feature', 'Feature Name');
};
```

### Conversion Goals
Set up goals in Google Analytics:
1. **Resume Download Goal** - Already configured as conversion
2. **Contact Form Goal** - Track form completions
3. **Social Media Goal** - Track social engagement

## 📈 Key Metrics to Monitor

1. **Daily/Monthly Visitors** - Portfolio traffic trends
2. **Resume Download Rate** - CV interest level
3. **Contact Form Conversion** - Lead generation
4. **Social Media CTR** - Social engagement
5. **Average Session Duration** - Content engagement
6. **Bounce Rate** - Portfolio effectiveness

## 🔒 Privacy & GDPR

The analytics setup is privacy-focused:
- No personal data collected without consent
- Uses Google Analytics 4 (GDPR compliant)
- Only tracks anonymous usage patterns
- Respects Do Not Track preferences

## 🚀 Deployment

Your analytics will work automatically once deployed with your GA4 ID configured. No additional server setup required!

## 📞 Support

If you need help setting up or have questions about the analytics data, the setup is designed to work out-of-the-box with minimal configuration.

---

**Pro Tip:** Set up Google Analytics alerts to notify you when someone downloads your resume or submits a contact form!