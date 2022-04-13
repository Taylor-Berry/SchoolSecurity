import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button 
        title="Navigate to" 
        onPress={() =>
          navigation.navigate('Login')
      }>Navigate</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})