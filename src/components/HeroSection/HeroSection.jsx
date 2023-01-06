import { Flex } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <Flex justify="center" align="center" pt="2rem">
      <Typewriter
        options={{
          strings: ['EnhanceAI', 'Enhance Captions', 'Enhance Grammar'],
          autoStart: true,
          loop: true,
        }}
      />
    </Flex>
  );
};
