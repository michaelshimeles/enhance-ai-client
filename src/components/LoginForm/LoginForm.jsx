import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link as ReachLink } from 'react-router-dom';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading textAlign="center">Sign in to your account</Heading>
        <Box pt="1rem">
          <FormLabel>Email address</FormLabel>
          <Input {...register('email')} />
          <FormLabel>Password</FormLabel>
          <Input {...register('password')} />
          <HStack justify="space-between" pt="1rem">
            <Checkbox {...register('remember')}>Remember me</Checkbox>
            <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Text textColor="blue.300">Forgot password</Text>
            </Link>
          </HStack>
          <Button w="full" type="submit" mt="1rem">
            Login
          </Button>
        </Box>
      </form>
    </Flex>
  );
};
