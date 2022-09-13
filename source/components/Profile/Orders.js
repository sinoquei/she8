import React from 'react'
import { Box, Button, HStack, ScrollView, Text } from 'native-base'
import Colors from '../../color'
import { Pressable } from 'react-native'

const Orders = () => {
  return (
    <Box h='full' bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* paid order */}
        <Pressable>
            <HStack 
                space={4} 
                justifyContent='space-between' 
                alignItems='center' 
                bg={Colors.subGreen}
                py={5}
                px={2}
            >
                <Text fontSize={10} color={Colors.blueDust} isTruncated>
                    0294850286240238409
                </Text>
                <Text fontSize={12} bold color={Colors.black} isTruncated>
                    PAID
                </Text>
                <Text fontSize={11} italic color={Colors.black} isTruncated>
                    Aug 20 2022
                </Text>
                <Button 
                    px={7} 
                    py={1.5} 
                    rounded={50} 
                    bg={Colors.main} 
                    _text={{ color:Colors.white }} 
                    _pressed={{ bg:Colors.main }}
                >
                    $295
                </Button>
            </HStack>
        </Pressable>
        {/* not paid */}
        <Pressable>
            <HStack 
                space={4} 
                justifyContent='space-between' 
                alignItems='center' 
                py={5}
                px={2}
            >
                <Text fontSize={10} color={Colors.blueDust} isTruncated>
                    0294850286240238409
                </Text>
                <Text fontSize={12} bold color={Colors.black} isTruncated>
                    NOT PAID
                </Text>
                <Text fontSize={11} italic color={Colors.black} isTruncated>
                    Sep 20 2022
                </Text>
                <Button 
                    px={7} 
                    py={1.5} 
                    rounded={50} 
                    bg={Colors.red} 
                    _text={{ color:Colors.white }} 
                    _pressed={{ bg:Colors.red }}
                >
                    $95
                </Button>
            </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders