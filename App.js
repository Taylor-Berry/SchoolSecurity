import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import our Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="Login" component={LoginScreen}options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen}options={{headerShown: true}} />

      </Stack.Navigator>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // Hiding header for Navigation Drawer
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
