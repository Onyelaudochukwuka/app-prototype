import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SigninScreen = () => {
  return (
    <View>
          <View style={styles.header}>
              <View style={[styles.balls,{
                  backgroundColor: '#888',
                  left: -20,
                  width: 300,
                  height: 300,
                  borderRadius: 300,
          
              }]}></View>
              <View style={[styles.balls,{
                  backgroundColor: '#777',
                  left: -10,
                  top: -120
              }]}></View>
              <View style={[styles.balls,{
                  backgroundColor: '#666',
                  left: 0,
              }]}></View>
              <View><Image source={require('../../assets/whiteicon.png')}/></View>
        </View>
      <Text>SigninScreen</Text>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        top: 0,
    }, 
    balls: {
        width: 300,
        position: 'absolute',
        height: 300,
        borderRadius: 300,
        top: -100,
    }
})