import { HeroSection } from '../../components/HeroSection/HeroSection';
import { NavBar } from '../../components/NavBar/NavBar';
import { Flex, VStack } from '@chakra-ui/react';
import { CardAI } from '../../components/CardAI/CardAI';
import { igCaption } from '../../info/InstagramCaptions';
import { fixGrammar } from '../../info/FixGrammar';
import { resumeBuilder } from '../../info/ResumeBuilder';
import { Layout } from '../../components/Layout/Layout';
export const Home = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" w="full">
        <NavBar />
        <HeroSection />
        <VStack spacing="1rem" pt="3rem" maxW={'90%'}>
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
      </Flex>
    </Layout>
  );
};
