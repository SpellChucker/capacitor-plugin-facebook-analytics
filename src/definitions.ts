declare module '@capacitor/core' {
  interface PluginRegistry {
    FacebookAnalytics: FacebookAnalyticsPlugin;
  }
}

export interface FacebookAnalyticsPlugin {
  logEvent(options: { event: string, valueToSum?: number, params?: any }): Promise<string>;
  logPurchase(options: {amount: number, currency: string, params: any}): Promise<string>;
  logAddPaymentInfo(options: {success: number}): Promise<string>;
  logAddToCart(options: {amount: number, currency: string, params?: any}): Promise<string>;
  logCompleteRegistration(options: {params?: any}): Promise<string>;
  logInitiatedCheckout(options: {amount: number, params?: any}): Promise<string>;
}
