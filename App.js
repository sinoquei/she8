import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, StatusBar } from 'native-base';
import LoginScreen from './source/screens/LoginScreen';
import RegisterScreen from './source/screens/RegisterScreen';
import OrderScreen from './source/screens/OrderScreen';
import BottomNav from './source/navigation/BottomNav';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator 
          initialRouteName='Bottom' 
          screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen 
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen 
            name='Register'
            component={RegisterScreen}
          />
          <Stack.Screen 
            name='Order'
            component={OrderScreen}
          />
          <Stack.Screen 
            name='Bottom'
            component={BottomNav}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
  
}


