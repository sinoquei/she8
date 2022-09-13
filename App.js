import { NativeBaseProvider } from 'native-base';
import ProfileScreen from './source/screens/ProfileScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  )
  
}


