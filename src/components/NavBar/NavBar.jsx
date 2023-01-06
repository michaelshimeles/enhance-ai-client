import { Flex, Image, Link } from '@chakra-ui/react';
import logo from '../../assets/logo/logo.png';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as ReachLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" py="1rem">
      <Flex justifyContent="space-between" alignItems="center" w="80%">
        <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Image src={logo} alt="Enhance AI logo" w="2.5rem" />
        </Link>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};
