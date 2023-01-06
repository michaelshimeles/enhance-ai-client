import { Flex, Heading } from '@chakra-ui/react';
// import Typewriter from 'typewriter-effect';

export const HeroSection = () => {
  return (
    <Flex justify="center" align="center" pt="2rem">
      {/* <Typewriter
        options={{
          strings: ['EnhanceAI', 'Enhance Captions', 'Enhance Grammar'],
          autoStart: true,
          loop: true,
        }}
      /> */}
      <Heading as="h1" size="3xl">
        Enhance AI
      </Heading>
    </Flex>
  );
};
