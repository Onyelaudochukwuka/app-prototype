import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet,View, Text,StatusBar} from 'react-native';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
   <HomeScreen />
      </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300
  }
});
