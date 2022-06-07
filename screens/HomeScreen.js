import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
const HomeScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
          <Image fade={1000} source={require("../assets/whiteicon.png")} style={styles.img} />
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue"
    },
    img: {
        width: 200,
        height: 200,
    },
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
      }
})