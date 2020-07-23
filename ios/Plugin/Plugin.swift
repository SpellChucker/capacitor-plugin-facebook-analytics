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

        guard let params = call.getObject("params") else {
            AppEvents.logEvent(.init(event))
            call.success()
            return;
        }

        AppEvents.logEvent(.init(event), parameters: params)

        call.success()
    }
}
