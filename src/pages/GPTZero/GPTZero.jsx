import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import React from 'react';
import GPTWriter from '../../components/GPTWriter/GPTWriter';
import { Layout } from '../../components/Layout/Layout';
import Rewriter from '../../components/Rewriter/Rewriter';

function GPTZero() {
  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        pt="1rem"
      >
        <Box
          direction="column"
          justify="center"
          align="center"
          w={['90%', '80%']}
          pt="2rem"
        >
          <Tabs variant="soft-rounded" size={['sm', 'md']}>
            <TabList p="1rem">
              <Tab>Writer</Tab>
              <Tab>Fixer</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <GPTWriter />
              </TabPanel>
              <TabPanel>
                <Rewriter />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Layout>
  );
}

export default GPTZero;
