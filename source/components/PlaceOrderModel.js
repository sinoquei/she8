import { Button, Center, HStack, Modal, Text, VStack } from 'native-base'
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

const PlaceOrderModel = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Center>
            <ButtonOne 
                onPress={() => setShowModal(true)} 
                bg={Colors.pinkDust} 
                color={Colors.white} 
                mt={5}
            >
                SHOW TOTAL
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
                        <Button 
                            flex={1} 
                            bg={Colors.pinkDust} 
                            h={45} 
                            _text={{color:Colors.white}}
                            onPress={() => setShowModal(false)}
                            _pressed={{bg:Colors.pinkDust}}
                        >
                            PLACE ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}

export default PlaceOrderModel