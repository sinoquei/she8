import { 
  Box, 
  Button, 
  Heading, 
  Image, 
  Input, 
  Pressable, 
  Text, 
  VStack 
} from 'native-base'
import React from 'react'
import Colors from '../color';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image flex={1} alt='Logo'
        resizeMode='cover'
        source={require('../../assets/cover.png')}
        /> 
        <Box w='full' h='full' position='absolute' top='0' px='6' justifyContent='center'>
          <Heading>LOGIN</Heading>
          <VStack space={8} pt='3'>
            {/* EMAIL */}
            <Input 
            InputLeftElement={
              <MaterialIcons
                name='email'
                size={20}
                color={Colors.main}
              />
            }
            variant='underlined' 
            placeholder='user@gmail.com' 
            w='50%' 
            pl={2}
            color={Colors.main} 
            borderBottomColor={Colors.underline} 
            />
            {/* PASSWORD */}
            <Input 
            InputLeftElement={
              <Ionicons
                name='eye'
                size={20}
                color={Colors.main}
              />
            }
            variant='underlined' 
            placeholder='*********' 
            w='50%' 
            type='password'
            pl={2}
            color={Colors.main} 
            borderBottomColor={Colors.underline} 
            />
          </VStack>
          <Button
            _pressed={{ bg: Colors.main }}
            my={30} 
            w='40%' 
            rounded={50} 
            bg={Colors.main}
            _text={{ color: Colors.white }}
          >
            LOGIN
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepGray}>SIGN UP</Text>
          </Pressable>
        </Box>
    </Box>
  );
}

export default LoginScreen;
