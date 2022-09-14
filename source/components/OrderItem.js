import { Box, Button, Center, FlatList, HStack, Image, Text, VStack } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native';
import products from '../data/Products';
import Colors from '../color';

const OrderItem = () => {
  return (
    <FlatList 
        showsVerticalScrollIndicator={false} 
        data={products.slice(0,3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Pressable>
                <Box mb={3}>
                    <HStack 
                        alignItems='center' 
                        bg={Colors.white} 
                        shadow={2} 
                        rounded={10} 
                        overflow='hidden'
                    >
                        <Center w='25%' bg={Colors.redDust}>
                            <Image 
                                source={item.image} 
                                alt={item.name} 
                                w='full' 
                                h={24}
                                resizeMode='contain'
                            />
                        </Center>
                        <VStack w='60%' px={2}>
                            <Text isTruncated color={Colors.black} bold fontSize={12}>
                                {item.name}
                            </Text>
                            <Text color={Colors.lightBlack} mt={2} bold>
                                ${item.price}
                            </Text>
                        </VStack>
                        <Center>
                            <Button 
                                bg={Colors.pinkDust} 
                                _pressed={{bg:Colors.main}}
                                _text={{color:Colors.white}}
                            >
                                6
                            </Button>
                        </Center>
                    </HStack>
                </Box>
            </Pressable>
        )}
    />
  )
}

export default OrderItem