import {
  Badge, Box, chakra, Flex,
  Image, Link, Text, useColorModeValue
} from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ReachLink } from 'react-router-dom';
import { auth } from '../../Firebase';

export const NewCard = ({ image, description, title, link, cta, launched }) => {
  const bgColor = useColorModeValue('white', 'blackAlpha.700');
  const [user] = useAuthState(auth);

  return (
    <Link
      as={ReachLink}
      to={user ? link : ""}
      _hover={{ textDecoration: 'none' }}
      p="1rem"
    >
      <Flex alignItems="center" justifyContent="center" maxW="sm">
        <Box
          mx="auto"
          rounded="lg"
          shadow="2xl"
          _dark={{
            bg: 'gray.800',
          }}
          maxW="2xl"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={image}
            alt="Article"
          />

          <Box p={6} bgColor={bgColor} borderBottomRadius="5px">
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{
                  color: 'brand.400',
                }}
              >
                {cta}
              </chakra.span>
              {/* <Link
                as={ReachLink}
                display="block"
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{
                  color: 'gray.600',
                  textDecor: 'underline',
                  textDecoration: 'none',
                }}
              > */}
              <Text fontWeight="bold">{title}</Text>
              {/* </Link> */}
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: 'gray.400',
                }}
              >
                {description}
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  {!launched ? (
                    <Badge colorScheme="purple">Coming Soon</Badge>
                  ) : (
                    <Badge colorScheme="green">It's Live</Badge>
                  )}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};
