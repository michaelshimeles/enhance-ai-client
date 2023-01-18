import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data =>
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged IN', user);
        navigate('/');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorCode);
        console.log(error);
        console.log(errorMessage);
      });

  return (
    <Flex justify="center" align="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading textAlign="center">Login to your account</Heading>

        <Flex direction="column" pt="1rem" gap="0.5rem">
          <Box>
            <FormLabel>Email address</FormLabel>

            <Input type="text" {...register('email', { required: true })} w="30rem" />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register('password', { required: true })} />
          </Box>
          <HStack justify="space-between" pt="0.5rem">
            <Checkbox {...register('remember')}>Remember me</Checkbox>
            <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Text textColor="blue.300">Forgot password</Text>
            </Link>
          </HStack>
          <Button w="full" type="submit" mt="0.5rem">
            Login
          </Button>
          {errors.email && <Text>Email field is required</Text>}
          {errors.password && <Text>Password field is required</Text>}
          {loginError === 'auth/user-not-found' && (
            <Text>User doesn't exist</Text>
          )}
          {loginError === 'auth/wrong-password' && (
            <Text>Password is incorrect</Text>
          )}
          {loginError?.contains('too-many-requests') && (
            <Text>
              Your account has been temporarily locked, try again later
            </Text>
          )}
        </Flex>
      </form>
    </Flex>
  );
};
