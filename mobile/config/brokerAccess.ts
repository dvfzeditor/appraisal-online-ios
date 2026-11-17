import { Platform } from 'react-native';

/**
 * Broker sign-up on the public WEB site is closed for now. It stays closed
 * until the backend is deployed (payments and webhooks depend on it), the
 * Stripe mode is chosen, admin ID review has been tested and the broker
 * legal terms are signed off.
 *
 * This only affects the web build. The iPhone app is unaffected.
 *
 * To reopen broker sign-up on the web, set BROKER_WEB_OPEN to true.
 */
export const BROKER_WEB_OPEN = false;

/** True when broker sign-up and the broker screens may be used on this platform. */
export const brokerAccessEnabled = Platform.OS !== 'web' || BROKER_WEB_OPEN;

/**
 * Where web visitors who want to become brokers are sent instead. The page
 * is served from the homeowner web site (see mobile/public/partners.html
 * and the redirect in vercel.json).
 */
export const BROKER_WAITLIST_URL = '/partners.html';
