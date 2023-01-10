import { NavBar } from '../../components/NavBar/NavBar';
import { Layout } from '../../components/Layout/Layout';
import { Flex } from '@chakra-ui/react';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

export const SignUp = () => {
  return (
    <Layout>
      <NavBar />
      <Flex justify="center" align="center" pt="4rem">
        <SignUpForm />
      </Flex>
    </Layout>
  );
};
