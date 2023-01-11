import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import { CaptionForm } from '../../components/CaptionForm/CaptionForm';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';
import { GenericCaption } from '../../components/GenericCaption/GenericCaption';
import { HashtagGenerator } from '../../components/HashtagGenerator/HashtagGenerator';

export const InstagramCaptions = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" pb="5rem">
        <NavBar />
        <Heading py="1rem">Caption Generator</Heading>
        <Box
          direction="column"
          justify="center"
          align="center"
          w={['90%', '80%']}
          pt="2rem"
        >
          <Tabs variant="soft-rounded">
            <TabList p="1rem">
              <Tab>Product</Tab>
              <Tab>Generic</Tab>
              <Tab>Hashtag Generator</Tab>
              <Tab isDisabled>Enhancer</Tab>
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
