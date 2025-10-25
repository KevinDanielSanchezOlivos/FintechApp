import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SingUp from './screens/SingUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Onboarding1">
        <Stack.Screen 
          name="Onboarding1" 
          component={Onboarding1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding2" 
          component={Onboarding2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding3" 
          component={Onboarding3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SingUp" 
          component={SingUp} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});