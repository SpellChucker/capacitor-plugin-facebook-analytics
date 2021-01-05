import { WebPlugin } from '@capacitor/core';
import { FacebookAnalyticsPlugin } from './definitions';

export class FacebookAnalyticsWeb extends WebPlugin implements FacebookAnalyticsPlugin {
  constructor() {
    super({
      name: 'FacebookAnalytics',
      platforms: ['web'],
    });
  }

  logEvent(options: { event: string, valueToSum?: number, params?: any }): Promise<string> {
    // TODO: Implement.
    return Promise.resolve(options.event);
  }
  logPurchase(options: { amount: number, params?: any, currency: string }): Promise<string> {
    // TODO: Implement.
    return Promise.resolve(JSON.stringify(options));
  }
  logAddPaymentInfo(options: {success: number}): Promise<string> {
    // TODO: Implement.
    return Promise.resolve(JSON.stringify(options));
  }
  logAddToCart(options: {amount: number, currency: string, params?: any}): Promise<string> {
    // TODO: Implement.
    return Promise.resolve(JSON.stringify(options));
  }
  logCompleteRegistration(options: {params?: any}): Promise<string> {
    // TODO: Implement.
    return Promise.resolve(JSON.stringify(options));
  }
  logInitiatedCheckout(options: {amount: number, params?: any}): Promise<string> {
    // TODO: Implement.
    return Promise.resolve(JSON.stringify(options));
  }
}

const FacebookAnalytics = new FacebookAnalyticsWeb();

export { FacebookAnalytics };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FacebookAnalytics);
