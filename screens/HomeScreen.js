import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase';



const HomeScreen = ({navigation}) => {
  const handleLogout =() => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Auth");
    })
    .catch(error => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '60%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#0782F9',
    alignItems: 'center'
  }
})