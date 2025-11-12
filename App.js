import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 🧩 Importación de pantallas
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SingUp from './screens/SingUp';
import PhoneInput from './screens/PhoneInput';
import ConfirmPhoneScreen from './screens/ConfirmPhoneScreen';
import VerifyNumberScreen from './screens/VerifyNumberScreen';
import CreatePasscodeScreen from './screens/CreatePasscodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>

        {/* 🌀 Onboarding */}
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />

        {/* 👤 Registro e inicio */}
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="PhoneInput" component={PhoneInput} />
        <Stack.Screen name="ConfirmPhoneScreen" component={ConfirmPhoneScreen} />
        <Stack.Screen name="VerifyNumberScreen" component={VerifyNumberScreen} />
        <Stack.Screen name="CreatePasscodeScreen" component={CreatePasscodeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* 🏠 Principal */}
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
