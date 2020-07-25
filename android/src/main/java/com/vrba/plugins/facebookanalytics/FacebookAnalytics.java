package com.vrba.plugins.facebookanalytics;

import com.getcapacitor.Bridge;
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
        if (bridge == null) {
            bridge = this.getBridge();
        }

        logger = AppEventsLogger.newLogger(bridge.getActivity().getApplicationContext());

        super.load();
    }

    @PluginMethod
    public void logEvent(PluginCall call) {
        if (!call.getData().has("event")) {
            call.reject("Must provide an event");
            return;
        }

        String event = call.getString("event");
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
