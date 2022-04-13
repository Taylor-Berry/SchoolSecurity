import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('window')
const ovalWidth = width * 0.5

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.titleText}>School Security</Text>
    <Text style={styles.loginInstructions}>Login to your Account</Text>
    <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Email'
            // value={ }
            // onChangeText={text => }
            style={styles.input}
          >
          </TextInput>
          <TextInput
            placeholder='Password'
            // value={ }
            // onChangeText={text => }
            style={styles.input}
            secureTextEntry
          >
          </TextInput>
        </View>

    </KeyboardAvoidingView>
    <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text>-Or Sign in With-</Text>
    <View style={styles.otherLoginContainer}>
      <View style={styles.option1}><Text>Google</Text></View>
      <View style={styles.option2}><Text>Facebook</Text></View>
      <View style={styles.option3}><Text>Twitter</Text></View>
    </View>
    <Text>Don't have an account?</Text><TouchableOpacity onPress={() => navigation.navigate("Register")}><Text style={styles.signUpText}>Sign Up</Text></TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    
    marginBottom: 125
  },
  loginInstructions:{
    justifyContent: 'flex-start',
    paddingRight: 145,
    paddingBottom: 5
},
  inputContainer:{
    width: width * .75,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  input:{
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,

  },
  buttonContainer:{
    width: width * .75,
    justifyContent: 'center',
    alignItems:'center',
    marginTop:25,
    marginBottom: 35
  },
  button:{
    backgroundColor: '#0782F9',
    width:'100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', 
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  otherLoginContainer:{
    marginTop: 50,
    marginBottom: 150,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option1:{
    backgroundColor: 'yellow',
    margin: 5
  },
  option2:{
    backgroundColor: 'green',
    margin: 5
  },
  option3: {
    backgroundColor: 'blue',
    margin: 5
  },
  signUpText: {
    color: 'blue',
    paddingTop: 5,
  }
})