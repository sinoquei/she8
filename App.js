import { NativeBaseProvider } from 'native-base';
import SingleProductScreen from './source/screens/SingleProductScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProductScreen />
    </NativeBaseProvider>
  )
  
}


