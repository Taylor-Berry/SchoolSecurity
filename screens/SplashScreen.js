import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'

const SplashScreen = ({navigation}) => {
    //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Auth');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>School Security</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  splashText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  }
});