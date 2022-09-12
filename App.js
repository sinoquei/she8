import { NativeBaseProvider } from 'native-base';
import CartScreen from './source/screens/CartScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <CartScreen />
    </NativeBaseProvider>
  )
  
}


