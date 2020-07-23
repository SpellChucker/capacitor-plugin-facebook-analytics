import { WebPlugin } from '@capacitor/core';
import { FacebookAnalyticsPlugin } from './definitions';

export class FacebookAnalyticsWeb extends WebPlugin implements FacebookAnalyticsPlugin {
  constructor() {
    super({
      name: 'FacebookAnalytics',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const FacebookAnalytics = new FacebookAnalyticsWeb();

export { FacebookAnalytics };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FacebookAnalytics);
