import React from 'react';
// import to import React and React Native’s Text Core Component
import { Text } from 'react-native';

/* The rest of this introduction to React uses cats in its examples: 
 * friendly, approachable creatures that need names and a cafe to work in. 
 * Here is your very first Cat component:*/ 

 const Cat = () => {
  return (
    <Text>Hello, I am your cat!</Text>
  );
}

export default Cat;
