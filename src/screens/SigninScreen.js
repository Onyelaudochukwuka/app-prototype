import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SigninScreen = () => {
  return (
      <View style={styles.container}>
          <View style={styles.sign}>
      <Text>Sign in</Text>              
          </View>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 60,
    },
    sign: {
        alignItems: 'flex-start',
    },
    text: {
        fontWeight: '900',
        fontSize: 30,
    }
})