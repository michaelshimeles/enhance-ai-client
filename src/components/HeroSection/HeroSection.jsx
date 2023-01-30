import { Flex, Hide, Show, Heading } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import './Hero.scss';
export const HeroSection = () => {
  return (
    <Flex justify="center" align="center" pt="2rem">
      <Hide below="lg">
        <Typewriter
          options={{
            strings: ['EnhanceAI', 'Enhance Captions', 'Enhance Grammar'],
            autoStart: true,
            loop: true,
          }}
        />
      </Hide>
      <Show below="lg">
        <Heading pb="2rem" size="3xl">
          EnhanceAI
        </Heading>
      </Show>
    </Flex>
  );
};
