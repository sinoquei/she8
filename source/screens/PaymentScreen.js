import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack
} from 'native-base'
import React from 'react'
import ButtonOne from '../components/Button';
import Colors from '../color';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const paymentMethods = [
  {
    Image: require('../../assets/images/paypal.png'),
    alt: 'paypal',
    icon: 'Ionicons'
  },
  {
    Image: require('../../assets/images/discover.png'),
    alt: 'discover',
    icon: 'FontAwesome'
  },
  {
    Image: require('../../assets/images/gpay.png'),
    alt: 'gpay',
    icon: 'FontAwesome'
  }
]

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* selection */}
      <Box h='full' bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((i, index) => (
              <HStack
                key={index}
                alignItems='center'
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent='space-between'
                rounded={10}
              >
                <Box>
                  <Image
                    source={i.Image}
                    alt={i.alt}
                    resizeMode='contain'
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === 'Ionicons' ?
                <Ionicons 
                  name='checkmark-circle' 
                  size={30} 
                  color={Colors.main} 
                /> :
                <FontAwesome 
                  name='circle-thin' 
                  size={30} 
                  color={Colors.main} 
                />}
              </HStack>
            ))}
            <ButtonOne 
              bg={Colors.main} 
              color={Colors.white} 
              mt={5}
              onPress={() => navigation.navigate('Placeorder')}
            >
              CONTINUE
            </ButtonOne>
            <Text italic textAlign='center'>
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen;
