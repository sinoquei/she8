import React from 'react';
import { 
    Box, 
    CheckIcon, 
    FormControl, 
    Heading, 
    Select, 
    Text, 
    TextArea, 
    VStack 
} from 'native-base';
import Colors from '../color';
import Rating from './Rating';
import Message from './Notifications/Message';
import { useState } from 'react';
import ButtonOne from './Button';

const Review = () => {
    const [ratings, setRatings] = useState('')

    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* no review */}
            {/* <Message
                color={Colors.gray}
                bg={Colors.redDust}
                size={14}
                bold
                children={'NO REVIEWS'}
            /> */}
            {/* review */}
            <Box p={3} bg={Colors.redDust} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Doe
                </Heading>
                <Rating value={4} />
                <Text my={2} fontSize={11}>May 12 2022</Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={11}
                    children={'Est aute fugiat minim voluptate laborum dolore labore.'}
                />
            </Box>
            {/* write review */}
            {/* <Box mt={6}>
                <Heading fontSize={15} bold mb={4}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize:'12px',
                            fontWeight:'bold', 
                        }}
                        >
                            Rating
                        </FormControl.Label>
                        <Select 
                            bg={Colors.redDust} 
                            borderWidth={0} 
                            rounded={5} 
                            py={3}
                            placeholder='Choose rating'
                            _selectedItem={{
                                bg:Colors.redDust,
                                endIcon:<CheckIcon size={5} />,
                            }}
                            selectedValue={ratings}
                            onValueChange={(e) => setRatings(e)}
                            >
                                <Select.Item label='1 - Poor' value='1' />
                                <Select.Item label='2 - Fair' value='2' />
                                <Select.Item label='3 - Good' value='3' />
                            </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize:'12px',
                            fontWeight:'bold', 
                        }}
                        >
                            Comment
                        </FormControl.Label>
                        <TextArea 
                            h={24} 
                            w='full' 
                            placeholder='This product is great because....'
                            borderWidth={0}
                            bg={Colors.redDust}
                            py={4}
                            _focus={{
                                bg: Colors.redDust
                            }}
                        />
                    </FormControl>
                    <ButtonOne bg={Colors.pinkDust} color={Colors.white}>
                        SUBMIT
                    </ButtonOne>
                    <Message
                        color={Colors.white}
                        bg={Colors.black}
                        size={11}
                        children={'Please "Login" to write a review.'}
                    />
                </VStack>
            </Box> */}
        </Box>
    )
}

export default Review