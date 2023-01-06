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

export const InstagramCaptions = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" pb="5rem">
        <NavBar />
        <Heading pb="1rem">Caption Generator 💬</Heading>
        <Box
          direction="column"
          justify="center"
          align="center"
          w={['90%', '80%']}
          pt="2rem"
        >
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab>Product</Tab>
              <Tab isDisabled>Generic</Tab>
              <Tab isDisabled>Enhancer</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CaptionForm />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Layout>
  );
};
