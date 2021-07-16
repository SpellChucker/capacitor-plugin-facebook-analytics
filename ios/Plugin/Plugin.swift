import Foundation
import Capacitor
import FBSDKCoreKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FacebookAnalytics)
public class FacebookAnalytics: CAPPlugin {

    @objc func logEvent(_ call: CAPPluginCall) {
        guard let event = call.getString("event") else {
            call.reject("Missing event argument")
            return;
        }

        print(event)

        if let valueToSum = call.getDouble("valueToSum") {
            if let params = call.getObject("params") {
                AppEvents.logEvent(.init(event), valueToSum: valueToSum, parameters: params)
            } else {
                AppEvents.logEvent(.init(event), valueToSum: valueToSum)
            }
            
        } else {
            if let params = call.getObject("params") {
                AppEvents.logEvent(.init(event), parameters: params)
            } else {
                AppEvents.logEvent(.init(event))
            }
        }
        

        call.resolve()
    }

    @objc func logPurchase(_ call: CAPPluginCall) {
        guard let amount = call.getDouble("amount") else {
            call.reject("Missing amount argument")
            return;
        }
        
        let currency = call.getString("currency") ?? "USD"
        let params = call.getObject("params") ?? [String:String]()
        
        AppEvents.logPurchase(amount, currency: currency, parameters: params)

        call.resolve()
    }

    @objc func logAddPaymentInfo(_ call: CAPPluginCall) {
        let success = call.getInt("success") ?? 0
        AppEvents.logEvent(.addedPaymentInfo, parameters: ["success": success])

        call.resolve()
    }

    @objc func logAddToCart(_ call: CAPPluginCall) {
        guard let amount = call.getDouble("amount") else {
            call.reject("Missing amount argument")
            return;
        }
        let currency = call.getString("currency") ?? "USD"

        var params = call.getObject("params") ?? [String: String]()
        
        params[AppEvents.ParameterName.currency.rawValue] = currency

        AppEvents.logEvent(.addedToCart, valueToSum: amount, parameters: params)

        call.resolve()
    }
    
    @objc func logCompleteRegistration(_ call: CAPPluginCall) {
        let parameters = call.getObject("params") ?? [String: String]()

        AppEvents.logEvent(.completedRegistration, parameters: parameters)

        call.resolve()
    }
    @objc func logInitiatedCheckout(_ call: CAPPluginCall) {
        guard let amount = call.getDouble("amount") else {
            call.reject("Missing amount argument")
            return;
        }        
        
        let parameters = call.getObject("params") ?? ["default": "default"]

        AppEvents.logEvent(.initiatedCheckout, valueToSum: amount, parameters: parameters)

        call.resolve()
    }
}
