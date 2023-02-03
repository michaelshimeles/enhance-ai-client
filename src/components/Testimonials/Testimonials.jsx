import { Avatar, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function Testimonials({ name, job, image, testimonial}) {
  const cardColor = useColorModeValue('white', '#0A0B0E');

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w={['20rem','30rem', '40rem']}
      gap="0.25rem"
      rounded="2xl"
      boxShadow="2xl"
      bg={cardColor}
      py="2rem"
      px="2rem"
    >
      <Avatar src={image} />
      <Text fontSize="lg">{name}</Text>
      <Text fontWeight="bold" fontSize="sm">
        {job}
      </Text>
      <Text fontSize="sm" align="center">
       {testimonial}
      </Text>
    </Flex>
  );
}

export default Testimonials;
