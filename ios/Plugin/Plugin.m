#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FacebookAnalytics, "FacebookAnalytics",
           CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logPurchase, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logAddPaymentInfo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logAddToCart, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logCompleteRegistration, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logInitiatedCheckout, CAPPluginReturnPromise);

)
