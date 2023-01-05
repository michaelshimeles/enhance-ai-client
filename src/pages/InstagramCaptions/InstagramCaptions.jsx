import { Flex, Heading } from '@chakra-ui/react';
import { CaptionForm } from '../../components/CaptionForm/CaptionForm';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';

export const InstagramCaptions = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" pb="5rem">
        <NavBar />
        <Heading pb="1rem">Caption Generator</Heading>
        <CaptionForm />
      </Flex>
    </Layout>
  );
};
