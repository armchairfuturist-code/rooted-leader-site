# Firebase Analytics Setup - The Rooted Leader Site

Firebase Analytics has been successfully integrated into your Vite + React application with automatic page view tracking.

## 📁 Files Created

### 1. **[firebase.ts](file:///C:/Users/Administrator/Documents/Projects/rooted-leader-site/firebase.ts)**
   - Core Firebase configuration and initialization
   - Project: `the-rooted-leader`
   - Measurement ID: `G-2QFDZFXVGC`
   - Exports `getAnalyticsInstance()` function
   - Prevents duplicate Firebase instances

### 2. **[analytics.ts](file:///C:/Users/Administrator/Documents/Projects/rooted-leader-site/analytics.ts)**
   - Complete analytics utility functions
   - `initializeAnalytics()` - Initialize analytics and track first page view
   - `trackEvent()` - Track custom events
   - `trackPageView()` - Track page views
   - `trackConversion()` - Track conversion events with value

## 🔧 Files Modified

### **[App.tsx](file:///C:/Users/Administrator/Documents/Projects/rooted-leader-site/App.tsx)**
   - Added `useEffect` hook to initialize analytics on app mount
   - Automatically tracks the initial page view
   - Runs once when the application loads

### **[package.json](file:///C:/Users/Administrator/Documents/Projects/rooted-leader-site/package.json)**
   - Added `firebase` dependency (v11.x)

---

## ✅ What's Working

### Automatic Page View Tracking
- ✅ Tracks initial page load when app mounts
- ✅ Logs tracking activity to browser console
- ✅ Captures page title and full URL
- ✅ Firebase Analytics initialized on first render

### Safe Browser-Only Initialization
- ✅ Analytics only runs in the browser
- ✅ No errors during development
- ✅ Singleton pattern prevents duplicate instances

---

## 🎯 How to Use

### 1. Start the Development Server

```bash
cd C:\Users\Administrator\Documents\Projects\rooted-leader-site
npm run dev
```

### 2. Test Analytics Tracking

1. **Open your browser** at the Vite dev server URL (usually http://localhost:5173)
2. **Open DevTools Console** (F12)
3. **Look for the initialization message**:
   ```
   🔥 Firebase Analytics initialized and tracking page views
   📊 Firebase Analytics: Event tracked - page_view
   ```

### 3. View Results in Firebase Console

- **Real-time**: [Firebase Console](https://console.firebase.google.com/project/the-rooted-leader/analytics)
- Navigate to: **Analytics** → **Events** → **page_view**
- Events appear within **1-2 minutes**
- Full reports available within **24 hours**

---

## 🎨 Track Custom Events

### Button Clicks

Add tracking to any component:

```tsx
import { trackEvent } from '../analytics';

export default function Hero() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      button_name: 'Get Started',
      section: 'hero',
      timestamp: new Date().toISOString()
    });
    
    // Your navigation logic here
  };

  return (
    <button onClick={handleCTAClick}>
      Get Started
    </button>
  );
}
```

### Form Submissions

```tsx
import { trackConversion } from '../analytics';

const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Track the conversion
  trackConversion('contact_form_submit', 0, 'USD');
  
  // Your form submission logic
};
```

### Section Views

Track when users scroll to specific sections:

```tsx
import { trackEvent } from '../analytics';
import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('section_view', {
            section_name: 'about',
            timestamp: new Date().toISOString()
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={sectionRef}>About content...</div>;
}
```

---

## 🔍 Debugging

### Check Browser Console

Look for these messages:
- ✅ `🔥 Firebase Analytics initialized and tracking page views`
- ✅ `📊 Firebase Analytics: Event tracked - page_view`
- ✅ `📊 Firebase Analytics: Event tracked - event_name`

### Common Issues

**1. "Firebase Analytics is not available"**
- This warning is expected if analytics fails to initialize
- Check your Firebase configuration credentials
- Ensure you have internet connectivity

**2. Events not showing in Firebase Console**
- Real-time events may take 1-2 minutes
- Full reports take up to 24 hours
- Verify you're looking at the correct Firebase project

**3. Console errors about Firebase**
- Make sure `firebase` package is installed: `npm install firebase`
- Check that imports are correct in your files

---

## 📊 Recommended Events to Track

### User Engagement

```tsx
// Scroll depth
trackEvent('scroll_depth', {
  depth_percentage: 75,
  page: window.location.pathname
});

// Time on page
trackEvent('time_on_page', {
  duration_seconds: 120,
  page: window.location.pathname
});
```

### Navigation

```tsx
// External link clicks
trackEvent('outbound_link', {
  url: 'https://example.com',
  link_text: 'Learn More'
});

// Internal navigation
trackEvent('internal_navigation', {
  from_section: 'hero',
  to_section: 'services'
});
```

### Conversions

```tsx
// Newsletter signup
trackConversion('newsletter_signup', 0, 'USD');

// Contact form
trackConversion('contact_form', 0, 'USD');

// Service inquiry
trackConversion('service_inquiry', 0, 'USD');
```

---

## 🚀 Advanced: Page View Tracking for SPAs

Since this is a single-page application (SPA), page views are only tracked on initial load. If you add routing (e.g., React Router), you can track route changes:

### With React Router (if you add it later)

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, document.title);
  }, [location]);

  // Rest of your app...
}
```

---

## 📝 Next Steps

1. ✅ **Test the implementation**
   - Run `npm run dev`
   - Open browser console
   - Look for analytics initialization messages

2. ✅ **Verify in Firebase Console**
   - Check real-time events in Firebase Console
   - Wait 1-2 minutes for events to appear

3. 🎯 **Add custom tracking** (optional)
   - Track important button clicks
   - Monitor form submissions
   - Track section views

4. 📈 **Set up conversion goals** (optional)
   - Define key conversion events in Firebase
   - Track newsletter signups, contact forms, etc.

---

## 🔐 Security & Privacy

- **Privacy Policy**: Ensure your site has a privacy policy that mentions analytics
- **Cookie Consent**: Consider adding cookie consent if required by GDPR/CCPA
- **Data Retention**: Configure data retention settings in Firebase Console
- **User Privacy**: Firebase Analytics is privacy-friendly and doesn't track PII by default

---

## 📚 Resources

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Firebase Console - Rooted Leader Project](https://console.firebase.google.com/project/the-rooted-leader)
- [Analytics Events Reference](https://firebase.google.com/docs/reference/js/analytics)
- [DebugView for Testing](https://firebase.google.com/docs/analytics/debugview)

---

**🎉 Your Firebase Analytics is now live and tracking!**

Run `npm run dev` and check your browser console to see it in action.
