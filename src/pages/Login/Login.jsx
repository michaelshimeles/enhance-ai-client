import { LoginForm } from '../../components/LoginForm/LoginForm';
import { NavBar } from '../../components/NavBar/NavBar';
import { Layout } from '../../components/Layout/Layout';
import { Flex } from '@chakra-ui/react';
export const Login = () => {
  return (
    <Layout>
      <NavBar />
      <Flex justify="center" align="center" pt="4rem">
        <LoginForm />
      </Flex>
    </Layout>
  );
};
