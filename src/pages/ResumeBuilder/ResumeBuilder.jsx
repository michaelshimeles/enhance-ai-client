import { Layout } from '../../components/Layout/Layout';
import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { NavBar } from '../../components/NavBar/NavBar';
import { ResumeFixer } from '../../components/ResumeFixer/ResumeFixer';
import { CoverLetter } from '../../components/CoverLetter/CoverLetter';

export const ResumeBuilder = () => {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" pb="5rem">
        <NavBar />
        <Heading py="1rem">Resume Builder</Heading>
        <Box
          direction="column"
          justify="center"
          align="center"
          w={['90%', '80%']}
          pt="2rem"
        >
          <Tabs variant="soft-rounded" size={['sm', 'md']}>
            <TabList p="1rem">
              <Tab>Resume</Tab>
              <Tab isDisabled>Cover Letter</Tab>
              <Tab isDisabled>Messaging Recruiter</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ResumeFixer />
              </TabPanel>
              <TabPanel>
                <CoverLetter />
              </TabPanel>
              <TabPanel>
                <Text>Crafting Messages</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Layout>
  );
};
