import { HStack } from 'native-base'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ value, text }) => {
    const size = 8;

  return (
    <HStack space={0.4} mt={1} alignItems='center'>
        <FontAwesome name={
            value >= 1 ? 'star' : value >= 0.5 ? 'star-half-o' : 'star-o'
        } 
        color='orange' 
        size={size} 
        />
        <FontAwesome name={
            value >= 1 ? 'star' : value >= 0.5 ? 'star-half-o' : 'star-o'
        } 
        color='orange' 
        size={size} 
        />
        <FontAwesome name={
            value >= 1 ? 'star' : value >= 0.5 ? 'star-half-o' : 'star-o'
        } 
        color='orange' 
        size={size} 
        />
        <FontAwesome name={
            value >= 1 ? 'star' : value >= 0.5 ? 'star-half-o' : 'star-o'
        } 
        color='orange' 
        size={size} 
        />
        <FontAwesome name={
            value >= 1 ? 'star' : value >= 0.5 ? 'star-half-o' : 'star-o'
        } 
        color='orange' 
        size={size} 
        />
    </HStack>
  )
}

export default Rating;
