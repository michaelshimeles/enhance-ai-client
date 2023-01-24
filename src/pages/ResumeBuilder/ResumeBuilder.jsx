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
  Progress
} from '@chakra-ui/react';
import { ResumeFixer } from '../../components/ResumeFixer/ResumeFixer';
import { CoverLetter } from '../../components/CoverLetter/CoverLetter';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export const ResumeBuilder = () => {
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
