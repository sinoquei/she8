import { NativeBaseProvider } from 'native-base';
import HomeScreen from './source/screens/HomeScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  )
  
}


