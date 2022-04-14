import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, {useState} from 'react'
import { auth } from '../firebase'

const {height, width} = Dimensions.get('window')

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    /**
     * * Handler for signing out. Once we call Firebase and sign the user
     * * out, we will navigate back to the Login page.
     */
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch(error => alert(error.message))
      }
  return (
    <View style={styles.container}>

    <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Email'
            value={ email }
             onChangeText={text => setEmail(text)}
            style={styles.input}
          >
          </TextInput>
          <TextInput
            placeholder='Password'
             value={ password }
             onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          >
          </TextInput>
        </View>
    <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width,
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
})