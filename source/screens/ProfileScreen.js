import { Center, Heading, Image, Text, View } from 'native-base'
import Colors from '../color';
import React from 'react'
import Tabs from '../components/Profile/Tabs';

const ProfileScreen = () => {
  return (
    <>
        <Center bg={Colors.main} pt={10} pb={6}>
          <Image 
            source={require('../../assets/user.png')}
            alt='profile'
            w={24}
            h={24}
            resizeMode='cover'
          />
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
            Admin Doe
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>Joined Aug 15 2022</Text>
        </Center>
        {/* tabs */}
        <Tabs />
    </>
  )
}

export default ProfileScreen;
