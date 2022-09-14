import { NativeBaseProvider } from 'native-base';
import OrderScreen from './source/screens/OrderScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <OrderScreen />
    </NativeBaseProvider>
  )
  
}


