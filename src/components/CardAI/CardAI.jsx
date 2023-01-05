import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Link,
  Show,
  Stack,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const CardAI = ({ title, description, cta, image, launched, link }) => {
  return (
    <Flex justify="center" align="center" w="90%">
      <Show below="lg">
        <Card maxW="sm">
          <CardBody>
            <Image src={image} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign="center">
                {title}
              </Heading>
              <Text size="sm" textAlign="left">
                {description}
              </Text>
            </Stack>
            <VStack>
              <Link
                as={ReachLink}
                to={link}
                _hover={{ textDecoration: 'none' }}
              >
                <Button variant="solid" colorScheme="blue" mt="1rem">
                  {cta}
                </Button>
              </Link>
            </VStack>
          </CardBody>
        </Card>
      </Show>
      <Show above="lg">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={image}
            alt="instagram logo"
          />

          <HStack>
            <CardBody>
              <Heading size="md">{title}</Heading>

              <Text py="2">{description}</Text>
              {!launched ? (
                <Badge colorScheme="purple">Coming Soon</Badge>
              ) : (
                <></>
              )}
            </CardBody>

            <CardFooter>
              <Link
                as={ReachLink}
                to={link}
                _hover={{ textDecoration: 'none' }}
              >
                <Button variant="solid" colorScheme="blue">
                  {cta}
                </Button>
              </Link>
            </CardFooter>
          </HStack>
        </Card>
      </Show>
    </Flex>
  );
};
