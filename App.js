import { NativeBaseProvider } from 'native-base';
import PlaceOrderScreen from './source/screens/PlaceOrderScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen />
    </NativeBaseProvider>
  )
  
}


