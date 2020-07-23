declare module '@capacitor/core' {
  interface PluginRegistry {
    FacebookAnalytics: FacebookAnalyticsPlugin;
  }
}

export interface FacebookAnalyticsPlugin {
  logEvent(options: { event: string, params?: any }): Promise<string>;
}
