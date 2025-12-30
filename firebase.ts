// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsQkVaL1Z86694rdv4HqVSifnHDhXsC4o",
    authDomain: "the-rooted-leader.firebaseapp.com",
    projectId: "the-rooted-leader",
    storageBucket: "the-rooted-leader.firebasestorage.app",
    messagingSenderId: "929871180025",
    appId: "1:929871180025:web:556b19990f4f456ce2f228",
    measurementId: "G-2QFDZFXVGC"
};

// Initialize Firebase
// Use getApps() to check if Firebase is already initialized to avoid multiple instances
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics and export
// Note: Analytics only works in the browser, not during server-side rendering
let analytics: Analytics | null = null;

// Function to get analytics instance (only in browser)
export const getAnalyticsInstance = () => {
    if (typeof window !== 'undefined' && !analytics) {
        analytics = getAnalytics(app);
    }
    return analytics;
};

export { app };
