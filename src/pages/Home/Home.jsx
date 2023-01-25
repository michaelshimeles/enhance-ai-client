import {
  Button,
  Flex,
  Hide,
  HStack,
  Link,
  Show,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Layout } from '../../components/Layout/Layout';
import { NewCard } from '../../components/NewCard/NewCard';
import { fixGrammar } from '../../info/FixGrammar';
import { igCaption } from '../../info/InstagramCaptions';
import { resumeBuilder } from '../../info/ResumeBuilder';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
// import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export const Home = () => {
  const [user] = useAuthState(auth);

  onAuthStateChanged(auth, currentUser => {
    if (currentUser === undefined) {
      window.location.reload();
    }
  });

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
          >
            <NewCard
              title={igCaption.title}
              description={igCaption.description}
              cta={igCaption.cta}
              image={igCaption.image}
              launched={igCaption.launched}
              link={igCaption.link}
              emailVerified={user?.emailVerified}
            />
            <NewCard
              title={fixGrammar.title}
              description={fixGrammar.description}
              cta={fixGrammar.cta}
              image={fixGrammar.image}
              launched={fixGrammar.launched}
              link={fixGrammar.link}
              emailVerified={user?.emailVerified}
            />
            <NewCard
              title={resumeBuilder.title}
              description={resumeBuilder.description}
              cta={resumeBuilder.cta}
              image={resumeBuilder.image}
              launched={resumeBuilder.launched}
              link={resumeBuilder.link}
              emailVerified={user?.emailVerified}
            />
          </Flex>
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
