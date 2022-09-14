import { NativeBaseProvider } from 'native-base';
import PaymentScreen from './source/screens/PaymentScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <PaymentScreen />
    </NativeBaseProvider>
  )
  
}


