package com.vrba.plugins.facebookanalytics;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.facebook.appevents.AppEventsLogger;
import android.os.Bundle;
import java.util.Iterator;

@NativePlugin
public class FacebookAnalytics extends Plugin {
    private AppEventsLogger logger;

    @Override
    public void load() {
        super.load();

        logger = AppEventsLogger.newLogger(this.bridge.getActivity());
    }

    @PluginMethod
    public void logEvent(PluginCall call) {
        if (!call.getData().has("event")) {
            call.reject("Must provide an event");
            return;
        }

        String event = call.getString("value");
        JSObject params = call.getObject("params", new JSObject());

        if (params.length() > 0) {
            Bundle parameters = new Bundle();
            Iterator<String> iter = params.keys();

            while (iter.hasNext()) {
                String key = iter.next();
                String value = params.getString(key);
                parameters.putString(key, value);
            }
            logger.logEvent(event, parameters);
        } else {
            logger.logEvent(event);
        }

        call.success();
    }
}
