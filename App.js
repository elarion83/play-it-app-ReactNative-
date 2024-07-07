import React, { useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

const MyWebView = () => {
  const webviewRef = useRef(null);
  return (
    <View style={{ flex: 1 }}>
      
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.play-it.fr' }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true}
        originWhitelist={['*']}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        geolocationEnabled={true}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MyWebView />
    </View>
  );
};

export default App;
