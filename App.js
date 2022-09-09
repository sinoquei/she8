import { NativeBaseProvider } from 'native-base';
import RegisterScreen from './source/screens/RegisterScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  )
  
}


