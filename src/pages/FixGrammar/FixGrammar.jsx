import { Flex, Heading } from '@chakra-ui/react';
import { GrammarForm } from '../../components/GrammarForm/GrammarForm';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';

export const FixGrammar = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" pb="5rem">
        <NavBar />
        <Flex direction="column" justify="center" align="center" w="100%" gap="1.5rem">
          <Heading>Fix Your Grammar 📝</Heading>
          <GrammarForm />
        </Flex>
      </Flex>
    </Layout>
  );
};
