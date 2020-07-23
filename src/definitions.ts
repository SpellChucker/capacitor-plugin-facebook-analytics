declare module '@capacitor/core' {
  interface PluginRegistry {
    FacebookAnalytics: FacebookAnalyticsPlugin;
  }
}

export interface FacebookAnalyticsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
