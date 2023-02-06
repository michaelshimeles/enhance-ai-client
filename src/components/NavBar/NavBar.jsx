import {
  Avatar,
  Button,
  Flex,
  Image,
  Link,
  Show,
  Text,
} from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiCoffeeTogo } from 'react-icons/bi';
import logo from '../../assets/logo/logo.png';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { auth } from '../../Firebase';

export const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" py="1rem">
      <Flex justifyContent="space-between" alignItems="center" w="80%">
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Image src={logo} alt="Enhance AI logo" w="2.5rem" />
        </Link>
        <Flex justify="center" align="center">
          {!user && (
            <Link href="/account" _hover={{ textDecoration: 'none' }}>
              <Button variant="ghost">
                <Text>Get Access</Text>
              </Button>
            </Link>
          )}
          {user && (
            <Flex justify="center" align="center" gap="1rem">
              <Show above="sm">
                <Link href="/feedback" _hover={{ textDecoration: 'none' }}>
                  <Button variant="ghost">Feedback</Button>
                </Link>
                <Link
                  href="https://www.buymeacoffee.com/mikeshimeles"
                  _hover={{ textDecoration: 'none' }}
                  target="_blank"
                >
                  <Button leftIcon={<BiCoffeeTogo />} variant="outline">
                    Buy Me Coffee
                  </Button>
                </Link>
              </Show>
              <Link href="/dashboard" _hover={{ textDecoration: 'none' }}>
                <Avatar w="2rem" h="2rem" />
              </Link>
            </Flex>
          )}
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};
