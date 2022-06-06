import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet,View, Text,StatusBar} from 'react-native';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
    <View>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  
      </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300
  }
});
