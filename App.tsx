/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'jotai';
import { Platform, StatusBar, StyleSheet } from 'react-native';

import { Layouts } from 'styles';
import Navigation from 'navigation';
import store from 'store';

const styles = StyleSheet.create({
  root: {
    ...Layouts.over,
  },
  android: {
    flex: 1,
  },
  ios: {
    flex: 1,
  },
});

const App: React.FC = () => {
  const rootStyles = Platform.OS === 'android' ? styles.android : styles.ios;

  return (
    <GestureHandlerRootView style={[styles.root, rootStyles]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
