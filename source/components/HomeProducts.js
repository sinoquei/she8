import { Flex, Image, Pressable, ScrollView, Text } from 'native-base';
import React from 'react';
import products from '../data/Products';
import Colors from '../color';

const HomeProducts = () => {
  return (
    <ScrollView flex={1}>
        <Flex 
            flexWrap='wrap' 
            direction='row' 
            justifyContent='space-between' 
            px={6}
        >
            {products.map((product) => (
                    <Pressable 
                        key={product.id} 
                        w='45%' 
                        bg={Colors.white} 
                        rounded='md' 
                        shadow={2} 
                        pt={0}
                        my={3}
                        pb={2}
                        overflow='hidden'
                    >
                        <Image 
                            source={product.image}
                            alt={product.name} 
                            width='full'
                            height={24}
                            resizeMode='contain'
                        />
                    </Pressable>
                ))}
        </Flex>
    </ScrollView>
  )
}


export default HomeProducts;
