import { Layout } from '../../components/Layout/Layout';
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export const Account = () => {
  return (
    <Layout>
      <Flex justify="center" align="center" pt="4rem">
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box pt="1rem">
                <LoginForm />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box pt="1rem">
                <SignUpForm />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  );
};
