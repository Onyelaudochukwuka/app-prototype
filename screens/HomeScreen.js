import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Image source={require('../assets/white icon.png')}/>
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue"
    }
})