import { Box, Center, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import React from 'react';
import products from '../data/Products';
import Colors from '../color';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native';

const HomeProducts = () => {
    const navigation = useNavigation();
    return (
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
                flexWrap='wrap'
                direction='row'
                justifyContent='space-between'
                px={6}
            >
                {products.map((product) => (
                    <Pressable
                        onPress={() => navigation.navigate('Single', product)}
                        key={product.id}
                        w='47%'
                        bg={Colors.white}
                        rounded='md'
                        shadow={2}
                        pt={0}
                        my={3}
                        pb={2}
                        overflow='hidden'
                    >
                        <Center>
                            <Image
                                source={product.image}
                                alt={product.name}
                                width='full'
                                height={24}
                                size='xl'
                                resizeMode='contain'
                            />
                        </Center>
                        <Box px={4} pt={1}>
                            <Heading size='sm' bold>${product.price}</Heading>
                            <Text fontSize={10} mt={1} isTruncated w='full'>{product.name}</Text>
                            <Rating value={product.rating} />
                        </Box>
                    </Pressable>
                ))}
            </Flex>
        </ScrollView>
    )
}


export default HomeProducts;
