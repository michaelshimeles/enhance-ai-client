import { HeroSection } from '../../components/HeroSection/HeroSection';
import { NavBar } from '../../components/NavBar/NavBar';
import { Flex, VStack } from '@chakra-ui/react';
import { CardAI } from '../../components/CardAI/CardAI';
import { igCaption } from '../../info/InstagramCaptions';
import { fixGrammar } from '../../info/FixGrammar';
import { resumeBuilder } from '../../info/ResumeBuilder';
import { Layout } from '../../components/Layout/Layout';
import { NewCard } from '../../components/NewCard/NewCard';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
export const Home = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" w="full">
        <NavBar />
        <HeroSection />
        <Tabs variant="soft-rounded" colorScheme="green" w="80%">
          <TabList>
            <Tab>Stacked</Tab>
            <Tab>Card</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing="1rem" pt="3rem" maxW='100%'>
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
            <TabPanel>
              <Flex justify="center" align="flex-start" gap="1rem" pt="3rem" flexWrap="wrap">
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  );
};
