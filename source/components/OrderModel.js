import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import Colors from '../color';
import ButtonOne from './Button';

const OrdersInfos = [
    {
        title:'Products',
        price:222.77,
        color:'black'
    },
    {
        title:'Shipping',
        price:15.99,
        color:'black'
    },
    {
        title:'Tax',
        price:12.99,
        color:'black'
    },
    {
        title:'Total Amount',
        price:333.10,
        color:'pinkDust'
    }
]

const OrderModel = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Center>
            <ButtonOne 
                onPress={() => setShowModal(true)} 
                bg={Colors.pinkDust} 
                color={Colors.white} 
                mt={5}
            >
                SHOW PAYMENT & TOTAL
            </ButtonOne>
            <Modal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                size='lg'
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfos.map((i, index) => (
                               <HStack key={index} alignItems='center' justifyContent='space-between'>
                                    <Text fontWeight='medium'>{i.title}</Text>
                                    <Text 
                                        color={ i.color === 'pinkDust' ? Colors.pinkDust : Colors.black} 
                                        bold
                                    >
                                        ${i.price}
                                    </Text>
                                </HStack> 
                            ))}                       
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable 
                            w='full' 
                            justifyContent='center' 
                            bg={Colors.paypal} 
                            h={45} 
                            rounded={3}
                            overflow='hidden'
                            onPress={() => setShowModal(false)}
                        >
                            <Image 
                                source={require('../../assets/images/paypal.png')}
                                alt='paypal'
                                resizeMode='contain'
                                w='full'
                                h={34}
                            />
                        </Pressable>
                        <Button 
                            w='full'
                            mt={2} 
                            bg={Colors.black} 
                            h={45} 
                            _text={{color:Colors.white}}
                            onPress={() => setShowModal(false)}
                            _pressed={{bg:Colors.black}}
                        >
                            PLACE ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}

export default OrderModel