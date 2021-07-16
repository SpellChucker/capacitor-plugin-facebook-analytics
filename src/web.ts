import { WebPlugin } from '@capacitor/core';
import { FacebookAnalyticsPlugin } from './definitions';

export class FacebookAnalyticsWeb extends WebPlugin implements FacebookAnalyticsPlugin {
  constructor() {
    super({
      name: 'FacebookAnalytics',
      platforms: ['web'],
    });
  }

  logEvent(_: { event: string, valueToSum?: number, params?: any }): Promise<string> {
    throw super.unimplemented();
  }

  logPurchase(_: { amount: number, params?: any, currency: string }): Promise<string> {
    throw super.unimplemented();
  }

  logAddPaymentInfo(_: {success: number}): Promise<string> {
    throw super.unimplemented();
  }

  logAddToCart(_: {amount: number, currency: string, params?: any}): Promise<string> {
    throw super.unimplemented();
  }

  logCompleteRegistration(_: {params?: any}): Promise<string> {
    throw super.unimplemented();
  }
  
  logInitiatedCheckout(_: {amount: number, params?: any}): Promise<string> {
    throw super.unimplemented();
  }
}




