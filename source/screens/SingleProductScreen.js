import { Box, Heading, HStack, Image, ScrollView, Spacer, Text, View } from 'native-base';
import { useState } from 'react';
import React from 'react'
import NumericInput from 'react-native-numeric-input';
import Colors from '../color';
import Rating from '../components/Rating';
import ButtonOne from '../components/Button';
import Review from '../components/Review';
import { useNavigation } from '@react-navigation/native';

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params

  return (
    <Box safeArea flex={1} bg={Colors.white}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
            <Image
              source={product.image}
              alt='Image'
              w='full'
              h={300}
              resizeMode='contain'
            />
            <Heading bold fontSize={15} mb={2} lineHeight={22}>
              {product.name}
            </Heading>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            <HStack space={2} alignItems='center' my={5}>
              {product.countInStock > 0 ? (
                  <NumericInput 
                    value={value} 
                    totalWidth={140} 
                    totalHeight={30}
                    iconSize={25}
                    step={1}
                    maxValue={product.countInStock}
                    minValue={0}
                    borderColor={Colors.deepGray}
                    rounded
                    textColor={Colors.black}
                    iconStyle={{ color:Colors.white }}
                    rightButtonBackgroundColor={Colors.pinkDust}
                    leftButtonBackgroundColor={Colors.pinkDust}
                />
              ) : (
                <Heading bold color={Colors.red} italic fontSize={12}>Out of Stock</Heading>
              )}
              <Spacer />
              <Heading bold color={Colors.black} fontSize={19}>${product.price}</Heading>
            </HStack>
            <Text lineHeight={24} fontSize={12}>
              Adipisicing consectetur elit est ea est id. Velit pariatur duis laborum enim cupidatat do consequat. Irure cupidatat reprehenderit tempor eiusmod ad irure minim fugiat. Mollit nisi amet mollit ex voluptate officia labore. Reprehenderit dolore duis pariatur irure aliquip duis adipisicing pariatur consectetur. Mollit dolore irure tempor minim duis proident enim consectetur.
            </Text>
            <ButtonOne 
              bg={Colors.pinkDust} 
              color={Colors.white} 
              mt={10}
              onPress={() => navigation.navigate('Cart')}
              >
                ADD TO CART
              </ButtonOne>
            {/* REVIEW */}
            <Review />
        </ScrollView>
    </Box>
  )
}

export default SingleProductScreen;
