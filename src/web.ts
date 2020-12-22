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
}

const FacebookAnalytics = new FacebookAnalyticsWeb();

export { FacebookAnalytics };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FacebookAnalytics);
