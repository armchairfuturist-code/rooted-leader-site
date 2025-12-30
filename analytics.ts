/**
 * Firebase Analytics Utilities
 * 
 * This module provides utilities for tracking custom events in Firebase Analytics.
 * The analytics instance is automatically initialized and used throughout the application.
 * 
 * Example usage:
 * ```tsx
 * import { trackEvent, trackPageView } from './analytics';
 * 
 * // Track a button click
 * trackEvent('button_click', {
 *   button_name: 'subscribe',
 *   location: 'hero_section'
 * });
 * 
 * // Track a page view
 * trackPageView('/about');
 * ```
 */

import { logEvent } from 'firebase/analytics';
import { getAnalyticsInstance } from './firebase';

/**
 * Track a custom event in Firebase Analytics
 * 
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Optional parameters to include with the event
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
    const analytics = getAnalyticsInstance();

    if (!analytics) {
        console.warn('Firebase Analytics is not available');
        return;
    }

    logEvent(analytics, eventName, eventParams);
    console.log(`📊 Firebase Analytics: Event tracked - ${eventName}`, eventParams);
}

/**
 * Track a page view event
 * 
 * @param pagePath - The path of the page (e.g., '/about', '/services')
 * @param pageTitle - Optional page title
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
    trackEvent('page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
    });
}

/**
 * Track a conversion event (useful for tracking goals)
 * 
 * @param conversionName - Name of the conversion (e.g., 'newsletter_signup', 'purchase')
 * @param value - Optional monetary value
 * @param currency - Optional currency code (default: 'USD')
 */
export function trackConversion(
    conversionName: string,
    value?: number,
    currency: string = 'USD'
) {
    trackEvent(conversionName, {
        value,
        currency,
        timestamp: new Date().toISOString(),
    });
}

/**
 * Initialize analytics and track the initial page view
 * Call this function once when your app starts
 */
export function initializeAnalytics() {
    const analytics = getAnalyticsInstance();

    if (analytics) {
        // Track initial page view
        trackPageView(window.location.pathname, document.title);
        console.log('🔥 Firebase Analytics initialized and tracking page views');
    } else {
        console.warn('Failed to initialize Firebase Analytics');
    }
}
