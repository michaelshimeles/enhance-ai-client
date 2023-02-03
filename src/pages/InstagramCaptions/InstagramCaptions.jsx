import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Progress,
} from '@chakra-ui/react';
import { CaptionForm } from '../../components/CaptionForm/CaptionForm';
import { Layout } from '../../components/Layout/Layout';
import { GenericCaption } from '../../components/GenericCaption/GenericCaption';
import { HashtagGenerator } from '../../components/HashtagGenerator/HashtagGenerator';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

export const InstagramCaptions = () => {
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
        <Heading py="1rem">Caption Generator</Heading>
        <Box
          direction="column"
          justify="center"
          align="center"
          w={['90%', '80%']}
          pt="2rem"
        >
          <Tabs variant="soft-rounded" size={['sm', 'md']}>
            <TabList p="1rem">
              <Tab>Product</Tab>
              <Tab>Generic</Tab>
              <Tab>Hashtags</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CaptionForm />
              </TabPanel>
              <TabPanel>
                <GenericCaption />
              </TabPanel>
              <TabPanel>
                <HashtagGenerator />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Layout>
  );
};
