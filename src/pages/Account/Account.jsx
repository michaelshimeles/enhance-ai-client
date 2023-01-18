import { LoginForm } from '../../components/LoginForm/LoginForm';
import { NavBar } from '../../components/NavBar/NavBar';
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

export const Account = () => {
  return (
    <Layout>
      <NavBar />
      <Flex justify="center" align="center" pt="4rem">
        <Tabs variant="soft-rounded" colorScheme="green">
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
