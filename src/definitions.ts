declare module '@capacitor/core' {
  interface PluginRegistry {
    FacebookAnalytics: FacebookAnalyticsPlugin;
  }
}

export interface FacebookAnalyticsPlugin {
  logEvent(options: { event: string, valueToSum?: number, params?: any }): Promise<string>;
}
