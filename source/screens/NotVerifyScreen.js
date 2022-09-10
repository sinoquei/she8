import { Box, Center, Image, VStack } from 'native-base'
import React from 'react'
import Colors from '../color';
import ButtonOne from '../components/Button';

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
        <Center w='full' h={250}>
          <Image source={require('../../assets/logo2.png')}
          alt='Logo'
          size='xl'
          />
        </Center>
        <VStack space={6} px={5} alignItems='center'>
          <ButtonOne bg={Colors.pinkDust} color={Colors.white}>REGISTER</ButtonOne>
          <ButtonOne bg={Colors.goldDust} color={Colors.white}>LOGIN</ButtonOne>
        </VStack>
    </Box>
  )
}

export default NotVerifyScreen;
