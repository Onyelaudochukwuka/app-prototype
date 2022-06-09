import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
const LoginScreen = () => {

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behaivour="padding"
    >
      <View style={styles.inputContainer}>
<TextInput 
placeholder="Email"
// value={}
// onChangeText={text=> }
style={styles.input}
/>
 <TextInput 
placeholder="Password"
// value={}
// onChangeText={text=> }
style={styles.input}
secureTextEntry
/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        // onpress={()=>}
        style={styles.button}
        >
            <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent : 'center',
    alignItems : 'center',
    width: "100%"
  },
  inputContainer: {
        width: "100%",
        justifyContent : 'center',
        alignItems : 'center',
  },
  input: {
    borderColor: "#000",
    borderWidth: 2,
    marginHorizontal: "auto",
    marginBottom: 30,
    width: "75%",
    padding: 20,
    color: "#000",
    borderRadius: 5,
    paddingLeft: 30
  },
  buttonContainer: {

  },
  button: {
    padding: 10,
    backgroundColor: "#666",
    color: "#fff",
    borderRadius: 5

  }
})