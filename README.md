## Installation

```bash
$ npm i --save capacitor-plugin-facebook-analytics
```

To use yarn

```bash
yarn add capacitor-plugin-facebook-analytics
```

## Android configuration

In file `android/app/src/main/java/**/**/MainActivity.java`, add the plugin to the initialization list:

```diff
  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    [...]
+   add(com.vrba.plugins.facebookanalytics.FacebookAnalytics.class);
    [...]
  }});
```

In file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :

```diff
+ <meta-data android:name="com.facebook.sdk.ApplicationId"
+     android:value="@string/facebook_app_id"/>
```

In file `android/app/src/main/res/values/strings.xml` add the following lines :

```diff
+ <string name="facebook_app_id">[APP_ID]</string>
```

Don't forget to replace `[APP_ID]` by your Facebook application Id.

More information can be found here: https://developers.facebook.com/docs/app-events/getting-started-app-events-android

## iOS configuration

Add the following in the `ios/App/App/info.plist` file:

```diff
+ <key>FacebookAppID</key>
+ <string>[APP_ID]</string>
+ <key>FacebookDisplayName</key>
+ <string>[APP_NAME]</string>
```

More information can be found here: https://developers.facebook.com/docs/app-events/getting-started-app-events-ios

## Supported methods

| Name                  | Android | iOS | Web |
| :-------------------- | :------ | :-- | :-- |
| logEvent              | ✅      | ✅  | ❌ |

## API

### logEvent

```ts
import { Plugins } from '@capacitor/core';
const { FacebookAnalytics } = Plugins;

// Example commands.
await FacebookAnalytics.logEvent(options: { event: string, params?: any }): Promise<string>;
await FacebookAnalytics.logPurchase(options: {amount: number, currency: string, params: any}): Promise<string>;
await FacebookAnalytics.logAddPaymentInfo(options: {success: number}): Promise<string>;
await FacebookAnalytics.logAddToCart(options: {amount: number, currency: string, params?: any}): Promise<string>;
await FacebookAnalytics.logCompleteRegistration(options: {params?: any}): Promise<string>;
await FacebookAnalytics.logInitiatedCheckout(options: {amount: number, params?: any}): Promise<string>;
```
