import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import logo from '../assets/whiteicon.png';
const HomeScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
              <Image source={logo} style={styles.img} />
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue"
    },
    img: {
        width: "auto",
        height: "auto",
        flex: 0.5
    },
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
      }
})