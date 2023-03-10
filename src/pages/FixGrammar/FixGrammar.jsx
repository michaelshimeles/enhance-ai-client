import { Flex, Heading, Progress } from '@chakra-ui/react';
import { GrammarForm } from '../../components/GrammarForm/GrammarForm';
import { Layout } from '../../components/Layout/Layout';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export const FixGrammar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  if (!user || user?.emailVerified === false) {
    navigate('/account');
    return (
      <Layout>
        <Progress isIndeterminate size="xs" />
      </Layout>
    );
  }
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" pb="5rem">
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100%"
          gap="1.5rem"
        >
          <Heading>Fix Your Grammar 📝</Heading>
          <GrammarForm />
        </Flex>
      </Flex>
    </Layout>
  );
};
