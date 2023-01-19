import {
  Badge,
  Button,
  Flex,
  Image,
  Link,
  Text
} from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ReachLink } from 'react-router-dom';
import profilePlaceholder from '../../assets/images/profile-placeholder.jpg';
import logo from '../../assets/logo/logo.png';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { auth } from '../../Firebase';

export const NavBar = () => {
  const [user] = useAuthState(auth);
  // const bgColor = useColorModeValue('white', 'blackAlpha.700');

  return (
    <Flex justifyContent="center" alignItems="center" w="100%" py="1rem">
      <Flex justifyContent="space-between" alignItems="center" w="80%">
        <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Image src={logo} alt="Enhance AI logo" w="2.5rem" />
        </Link>
        <Flex justify="center" align="center">
          {!user && (
            <Link
              as={ReachLink}
              to="/account"
              _hover={{ textDecoration: 'none' }}
            >
              <Button>
                <Text>Get Access</Text>
              </Button>
            </Link>
          )}
          {user && (
            <Flex justify="center" align="center" gap="1rem">
              <Badge colorScheme="green">Free Account</Badge>
              <Link
                as={ReachLink}
                to="/dashboard"
                _hover={{ textDecoration: 'none' }}
              >
                <Image
                  src={user.photoURL || profilePlaceholder}
                  rounded="full"
                  w="2rem"
                  h="2rem"
                  alt="profile pic"
                />
              </Link>
            </Flex>
          )}
          {/* <Hide below="lg">
            <Flex gap="1rem">
              <Link
                as={ReachLink}
                to="/captions"
                _hover={{ textDecoration: 'none' }}
              >
                <Button bgColor={bgColor}>💬 Captions</Button>
              </Link>
              <Link
                as={ReachLink}
                to="/grammar"
                _hover={{ textDecoration: 'none' }}
              >
                <Button bgColor={bgColor}>📝 Grammar</Button>
              </Link>
              <Link
                as={ReachLink}
                to="/resume"
                _hover={{ textDecoration: 'none' }}
              >
                <Button bgColor={bgColor}>💼 Resume</Button>
              </Link>
            </Flex>
          </Hide> */}
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};
