import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SigninScreen = () => {
  return (
    <View>
          <View style={styles.header}>
              <View style={[styles.balls,{
                  backgroundColor: '#888',
              }]}></View>
              <View style={[styles.balls,{
                  backgroundColor: '#666',
              }]}></View>
              <View style={[styles.balls,{
                  backgroundColor: '#444',
              }]}></View>
              <View><Image/></View>
        </View>
      <Text>SigninScreen</Text>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        top: 0,
    }, 
    balls: {
        width: '80%',
        position: 'absolute',
        height: 200,
        borderRadius: 50,
    }
})