import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet,View} from 'react-native';

export default function App() {
  return (
    <Provider>
      <View style={{
        backgroundColor: "#222",
        flex: 0.1,
      }} >
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
