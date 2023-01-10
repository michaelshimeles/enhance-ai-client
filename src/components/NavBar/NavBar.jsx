import {
  Button,
  Flex,
  Image,
  Link,
  Hide,
  useColorModeValue,
} from '@chakra-ui/react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ReachLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
// import { auth } from '../../Firebase';

export const NavBar = () => {
  // const [user] = useAuthState(auth);
  const bgColor = useColorModeValue('white', 'blackAlpha.700');

  return (
    <Flex justifyContent="center" alignItems="center" w="100%" py="1rem">
      <Flex justifyContent="space-between" alignItems="center" w="80%">
        <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Image src={logo} alt="Enhance AI logo" w="2.5rem" />
        </Link>
        <Flex justify="center" align="center">
          {/* {!user && (
            <Link
              as={ReachLink}
              to="/signup"
              _hover={{ textDecoration: 'none' }}
            >
              <Button>
                <Text>Get Access</Text>
              </Button>
            </Link>
          )} */}
          {/* {user && (
            <Link
              as={ReachLink}
              to="/dashboard"
              _hover={{ textDecoration: 'none' }}
            >
              <Image
                src={user.photoURL}
                rounded="full"
                w="2rem"
                h="2rem"
                alt="profile pic"
              />
            </Link>
          )} */}
          <Hide below="lg">
            <Flex gap="1rem">
              <Link
                as={ReachLink}
                to="/captions"
                _hover={{ textDecoration: 'none' }}
              >
                <Button bgColor={bgColor}>💬 Caption Generator</Button>
              </Link>
              <Link
                as={ReachLink}
                to="/grammar"
                _hover={{ textDecoration: 'none' }}
              >
                <Button bgColor={bgColor}>📝 Grammar Fixer</Button>
              </Link>
            </Flex>
          </Hide>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};
