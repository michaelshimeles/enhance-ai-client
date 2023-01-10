import { Button, Flex, Hide, HStack, Link, Show, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';
import { NewCard } from '../../components/NewCard/NewCard';
import { fixGrammar } from '../../info/FixGrammar';
import { igCaption } from '../../info/InstagramCaptions';
import { resumeBuilder } from '../../info/ResumeBuilder';

export const Home = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" w="full">
        <NavBar />
        <HeroSection />
        <Hide below="lg">
          {/* <Tabs variant="soft-rounded" colorScheme="blue" w="80%">
            <TabList>
              <Tab>Stacked</Tab>
              <Tab>Card</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing="1rem" pt="3rem" maxW="100%">
                  <CardAI
                    title={igCaption.title}
                    description={igCaption.description}
                    cta={igCaption.cta}
                    image={igCaption.image}
                    launched={igCaption.launched}
                    link={igCaption.link}
                  />
                  <CardAI
                    title={fixGrammar.title}
                    description={fixGrammar.description}
                    cta={fixGrammar.cta}
                    image={fixGrammar.image}
                    launched={fixGrammar.launched}
                    link={fixGrammar.link}
                  />
                  <CardAI
                    title={resumeBuilder.title}
                    description={resumeBuilder.description}
                    cta={resumeBuilder.cta}
                    image={resumeBuilder.image}
                    launched={resumeBuilder.launched}
                    link={resumeBuilder.link}
                  />
                </VStack>
              </TabPanel>
              <TabPanel> */}
          <Flex
            justify="center"
            align="flex-start"
            gap="1rem"
            pt="3rem"
            flexWrap="wrap"
          >
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
          {/* </TabPanel>
            </TabPanels>
          </Tabs> */}
        </Hide>
        <Show below="lg">
          <Flex
            justify="center"
            align="flex-start"
            gap="1rem"
            pt="3rem"
            flexWrap="wrap"
          >
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
        </Show>
        <VStack pt="3rem" mb="2rem">
          <Text fontWeight="bold">Connect with me</Text>
          <HStack>
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
          </HStack>
        </VStack>
      </Flex>
    </Layout>
  );
};
