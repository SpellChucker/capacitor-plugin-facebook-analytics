import Foundation
import Capacitor
import FacebookCore

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
        

        call.success()
    }
}