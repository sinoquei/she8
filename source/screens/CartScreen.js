import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from '../color';
import ButtonOne from '../components/Button';
import CartEmpty from '../components/CartEmpty';
import CartItems from '../components/CartItems';

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
        {/* Header */}
        <Center w='full' py={5}>
          <Text color={Colors.black} fontSize={20} bold>
            Cart
          </Text>
        </Center>
        {/* if cart is empty
        <CartEmpty /> */}
        {/* cart items */}      
          <CartItems />
          {/* buttons */}
          <Center mt={5}>
            <HStack 
              rounded={50} 
              justifyContent='space-between' 
              bg={Colors.white} 
              shadow={2} 
              w='90%' 
              pl={5}
              h={45}
              alignItems='center'
            >
              <Text>Total</Text>
              <Button 
                px={10} 
                h={45} 
                rounded={50} 
                bg={Colors.main}
                _text={{
                  color:Colors.white,
                  fontWeight: 'semibold'
                }}
                _pressed={{
                  bg: Colors.main
                }}
              >
                $356
              </Button>
            </HStack>
          </Center>
          <Center px={5}>
            <ButtonOne 
              bg={Colors.black} 
              color={Colors.white} 
              mt={10}
              onPress={() => navigation.navigate('Shipping')}
            >
              CHECKOUT
            </ButtonOne>
          </Center>
    </Box>
  );
}

export default CartScreen;
