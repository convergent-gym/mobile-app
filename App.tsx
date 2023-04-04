import Reactfrom 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import GymSelecionScreen from './src/pages/GymSelectionScreen/GymSelectionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="GymSelectionScreen" component={GymSelecionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}