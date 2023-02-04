import theme from '../../theme';
import { useColorMode } from '@chakra-ui/color-mode';
import { NavBar } from '../NavBar/NavBar';
import { Flex, Text } from '@chakra-ui/react';
export const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <div
      style={{
        backgroundColor:
          colorMode === 'light'
            ? theme.config.colors.white
            : theme.config.colors.black,
        minHeight: '100vh',
      }}
    >
      <Flex justify="center" align="center" py="0.35rem" bgColor="blue.900" w="100%">
        <Text textAlign="center" fontSize="xs" fontWeight="bold" color="white">
          New features and upgrades coming soon! 🚀
        </Text>
      </Flex>
      <NavBar />
      {children}
    </div>
  );
};
