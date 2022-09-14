import { Box, Heading, ScrollView, Text, View } from 'native-base'
import React from 'react'
import Colors from '../color';
import OrderInfo from '../components/OrderInfo';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderItem from '../components/OrderItem';
import OrderModel from '../components/OrderModel';

const OrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo 
            title='SHIPPING INFO' 
            success
            subTitle='Shipping: Seattle, WA, USA' 
            text='Pay Method: PayPal'
            icon={<FontAwesome5 name='shipping-fast' size={30} color={Colors.white} />}
          />
          <OrderInfo 
            title='DELIVERY INFO' 
            subTitle='Address:'
            danger 
            text='13 Doll Drive, Apt #662, Seattle, WA 44551'
            icon={<Ionicons name='location-sharp' size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* total */}
        <OrderModel />
      </Box>
    </Box>
  )
}

export default OrderScreen;
