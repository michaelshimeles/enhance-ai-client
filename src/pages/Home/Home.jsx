import {
  Button,
  Flex,
  Heading,
  Hide,
  Link,
  Show,
  Text, VStack
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Layout } from '../../components/Layout/Layout';
import { NewCard } from '../../components/NewCard/NewCard';
import Testimonials from '../../components/Testimonials/Testimonials';
import { fixGrammar } from '../../info/card/FixGrammar';
import { igCaption } from '../../info/card/InstagramCaptions';
import { resumeBuilder } from '../../info/card/ResumeBuilder';
import { testimonials } from '../../info/testimonials/testimonials';

export const Home = () => {
  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="full"
        wrap="wrap"
      >
        <HeroSection />
        <Hide below="lg">
          <Flex
            justify="center"
            align="flex-start"
            gap="1rem"
            pt="3rem"
            flexWrap="wrap"
            w="90%"
          >
            {/* <NewCard
              title={gptZero.title}
              description={gptZero.description}
              cta={gptZero.cta}
              image={gptZero.image}
              launched={gptZero.launched}
              link={gptZero.link}
            /> */}
            <NewCard
              title={igCaption.title}
              description={igCaption.description}
              cta={igCaption.cta}
              image={igCaption.image}
              launched={igCaption.launched}
              link={igCaption.link}
            />
            <NewCard
              title={fixGrammar.title}
              description={fixGrammar.description}
              cta={fixGrammar.cta}
              image={fixGrammar.image}
              launched={fixGrammar.launched}
              link={fixGrammar.link}
            />
            <NewCard
              title={resumeBuilder.title}
              description={resumeBuilder.description}
              cta={resumeBuilder.cta}
              image={resumeBuilder.image}
              launched={resumeBuilder.launched}
              link={resumeBuilder.link}
            />
          </Flex>
          <VStack pt="4rem">
            <Heading textAlign="center" pb="2rem">
              What People Have To Say
            </Heading>
            {testimonials.map((testimonial, index) => {
              return (
                <Flex py="1rem" key={testimonial.name}>
                  <Testimonials
                    name={testimonial.name}
                    job={testimonial.job}
                    testimonial={testimonial.testimonial}
                    image={testimonial.image}
                  />
                </Flex>
              );
            })}
          </VStack>
        </Hide>
        <Show below="lg">
          <Flex
            justify="center"
            align="flex-start"
            gap="1rem"
            pt="3rem"
            flexWrap="wrap"
          >
            {/* <NewCard
              title={gptZero.title}
              description={gptZero.description}
              cta={gptZero.cta}
              image={gptZero.image}
              launched={gptZero.launched}
              link={gptZero.link}
            /> */}
            <NewCard
              title={igCaption.title}
              description={igCaption.description}
              cta={igCaption.cta}
              image={igCaption.image}
              launched={igCaption.launched}
              link={igCaption.link}
            />
            <NewCard
              title={fixGrammar.title}
              description={fixGrammar.description}
              cta={fixGrammar.cta}
              image={fixGrammar.image}
              launched={fixGrammar.launched}
              link={fixGrammar.link}
            />
            <NewCard
              title={resumeBuilder.title}
              description={resumeBuilder.description}
              cta={resumeBuilder.cta}
              image={resumeBuilder.image}
              launched={resumeBuilder.launched}
              link={resumeBuilder.link}
            />
          </Flex>
          <VStack pt="4rem">
            <Heading textAlign="center" fontSize={["2xl", "2xl", "4xl"]} pb="2rem">
              What People Have To Say
            </Heading>
            {testimonials.map(testimonial => {
              return (
                <Flex py="0.75rem" key={testimonial.name}>
                  <Testimonials
                    name={testimonial.name}
                    job={testimonial.job}
                    testimonial={testimonial.testimonial}
                    image={testimonial.image}
                  />
                </Flex>
              );
            })}
          </VStack>
        </Show>
        <VStack pt="3rem" mb="5rem">
          <Text fontWeight="bold">Connect with me</Text>
          <Flex
            justify="center"
            align="center"
            wrap="wrap"
            gap="1rem"
            pt="0.5rem"
          >
            <Link
              isExternal
              href="https://github.com/michaelshimeles"
              _hover={{ textDecoration: 'none' }}
            >
              <Button colorScheme="facebook" leftIcon={<FaGithub />}>
                Github
              </Button>
            </Link>

            <Link
              isExternal
              href="https://www.linkedin.com/in/michaelshimeles/"
              _hover={{ textDecoration: 'none' }}
            >
              <Button colorScheme="facebook" leftIcon={<FaLinkedin />}>
                LinkedIn
              </Button>
            </Link>
            <Link
              isExternal
              href="https://www.twitter.com/mikeshimeles/"
              _hover={{ textDecoration: 'none' }}
            >
              <Button colorScheme="facebook" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
            </Link>
            <Link
              isExternal
              href="https://www.instagram.com/michaelshimeles/"
              _hover={{ textDecoration: 'none' }}
            >
              <Button colorScheme="facebook" leftIcon={<FaInstagram />}>
                Instagram
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Layout>
  );
};
